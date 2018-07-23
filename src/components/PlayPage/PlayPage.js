/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'
//import component
import SubtitleBar from './SubtitleBar'
//import plugins
import { Player } from 'ekiio-video-react'
import parser from 'subtitles-parser'

//import constant
import CDN from '../../constants/cdn'
//import styles
import '../../../node_modules/ekiio-video-react/dist/ekiio-video-react.css'
import * as styles from './PlayPage.less'

export default class PlayPage extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      subs: null,
      currentSubIndex: -1,
      subJALoading: true,
      getMoviePlayDataSuccess: false,
      enableViSub: false,
    }
    this.player = React.createRef()
    this.seek = this.seek.bind(this)
    this.toggleSubVi = this.toggleSubVi.bind(this)
  }

  toggleSubVi () {
    let currentTime = this.refs.player.getState().player.currentTime
    this.setState(prevState => ({enableViSub: !prevState.enableViSub}),
      () => this.refs.player.seek(currentTime))
  }

  // static getDerivedStateFromProps (nextProps, prevState) {
  //   //TODO not need to getMoviePlayData all times state change ???
  //   // props.getMoviePlayData()
  //   // if (props.getMoviePlayDataSuccess !== state.getMoviePlayDataSuccess) {
  //   //   return {
  //   //     getMoviePlayDataSuccess: true,
  //   //   }
  //   // } else return null
  // }
  // static getDerivedStateFromProps (nextProps, prevState) {
  //   if (!prevState.getMoviePlayDataSuccess &&
  //     nextProps.getMoviePlayDataSuccess) {
  //     console.log("yes")
  //     return {getMoviePlayDataSuccess: true}
  //   } else {
  //     return null
  //   }
  // }

  componentDidMount () {
    //get movie data after initial render
    //TODO bug second time play will not update cause  state of redux not change
    this.props.getMoviePlayData()
    //trick, dangerous
    this.setState({getMoviePlayDataSuccess: true})
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.getMoviePlayDataSuccess &&
      this.props.getMoviePlayDataSuccess) {
      //subscribe player state change handle  after player rendered only
      this.player.current.subscribeToStateChange(
        this.handleStatePlayerChange.bind(this))

      //only fetch sub when got movie data
      if (prevState.subJALoading) {
        fetch(CDN + this.props.moviePlayData.JASubSrc)
          .then(res => res.text())
          .then(data => {
            this.setState(
              {subs: {JA: parser.fromSrt(data, true)}, subJALoading: false})
          })
      }
    }

  }

// fire when video player state change
  handleStatePlayerChange (state, prevState) {
    //get sub index depend on current time
    //TODO improve performance sub search
    const {subs, currentSubIndex, subJALoading} = this.state

    if (!subJALoading && state.currentTime !== prevState.currentTime) {
      let tempIndex = -1
      tempIndex = subs.JA.slice(0, subs.JA.length - 1).findIndex(
        (sub) => sub.startTime / 1000 <= state.currentTime &&
          sub.endTime / 1000 >= state.currentTime,
      )
      if (tempIndex !== currentSubIndex) {
        this.setState({currentSubIndex: tempIndex})
      }
    }

  }

  seek (seconds) {
    this.player.current.seek(seconds)
  }

  render () {
    const fetchedData = this.props.getMoviePlayDataSuccess
    const data = this.props.moviePlayData
    const src = {
      en: 'https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22',
      vi: 'https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22',
    }
    return (
      !fetchedData ? <div>loading</div> :

        <div className={styles.wrap}>
          <div
            className={styles.player}>
            <Player
              ref={this.player}
              src={this.state.enableViSub ? src.vi : src.en}
              poster="http://cdn.ekiio.com/images/1.jpg"
              toggleSubVi={this.toggleSubVi}
            />
          </div>
          <SubtitleBar subs={this.state.subJALoading ? [] : this.state.subs.JA}
                       isLoading={this.state.subJALoading}
                       seek={this.seek}
                       currentSubIndex={this.state.currentSubIndex} />
        </div>
    )
  }
}

PlayPage.propTypes = {
  getMoviePlayDataSuccess: PropTypes.bool,
  moviePlayData: PropTypes.object,
}
