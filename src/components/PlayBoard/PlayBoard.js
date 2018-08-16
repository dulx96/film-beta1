import React from 'react'
import PropTypes from 'prop-types'
//import component
import PlayerSettingPopup from './PlayerSettingPopup'
import SubtitleBar from './SubtitleBar'
import JaSubView from './JaSubView'

//import plugins
import { Player } from 'ekiio-video-react'
import parser from 'subtitles-parser'

//import constant
import CDN from '../../constants/cdn'
//import styles
import '../../../node_modules/ekiio-video-react/lib/styles/ekiio-video-react.css'
import * as styles from './PlayBoard.less'
import classNames from 'classnames'

export default class PlayBoard extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      subs: null,
      currentSubIndex: -1,
      subJALoading: true,
      getMoviePlayDataSuccess: false,
      enableViSub: false,
      enableJaSub: true,
      settingActive: false,
    }
    this.player = React.createRef()
    this.seek = this.seek.bind(this)
    this.toggleSetting = this.toggleSetting.bind(this)
    this.toggleSub = this.toggleSub.bind(this)
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
    this.props.getMoviePlayData()
  }

  componentWillUnmount () {
    this.props.getMoviePlayDataFailed()
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
      let tempIndex = subs.JA.slice(0, subs.JA.length - 1).findIndex(
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

  toggleSub (lan) {
    let currentTime = this.player.current.getState().player.currentTime
    switch (lan) {
      case 'vi': {
        this.setState(prevState => ({enableViSub: !prevState.enableViSub}),
          () => {
            this.player.current.seek(currentTime)
            this.player.current.play()
          })
        break
      }
      case 'ja': {
        this.setState(prevState => ({enableJaSub: !prevState.enableJaSub}))
        break
      }
      default:
        return
    }
  }

  toggleSetting () {
    this.setState(prevState => ({settingActive: !prevState.settingActive}))
  }

  render () {
    const fetchedData = this.props.getMoviePlayDataSuccess
    const data = this.props.moviePlayData
    const src = {
      en: 'https://video.fsgn4-1.fna.fbcdn.net/v/t42.9040-2/10000000_482153782279699_5541991207644692480_n.mp4?_nc_cat=1&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&_nc_eui2=AeGhtKiln466rKPbCWnGSvkAmfV2btwkQUjx6eG5ZeKJWt4rTt6jBWtsFlYh4qR2Em-ewCsTGVKuGD32jfBvxjM13getEmcD9dp7YSy0NfwKqA&rl=1500&vabr=947&oh=7c82189d8108959f8ea543a80bdf298d&oe=5B76CD54',
      vi: 'https://video.fhan3-2.fna.fbcdn.net/v/t42.9040-2/10000000_2124043497813397_2436500299519623168_n.mp4?_nc_cat=1&efg=eyJybHIiOjE1NzUsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1575&vabr=1050&oh=88bad5f01472a8bce781191709d31424&oe=5B77DC9A',
    }
    return (
      !fetchedData ? <div>loading</div> :

        <div className={styles['wrap']}>
          <div className={styles['col-primary']}>
            <div
              ref={this.wrapPlayer}
              className={classNames({
                [styles.player]: true,
              })}>
              <Player
                ref={this.player}
                src={this.state.enableViSub ? src.vi : src.en}
                poster="http://cdn.ekiio.com/images/1.jpg"
                toggleSetting={this.toggleSetting}
              >
                <PlayerSettingPopup settingActive={this.state.settingActive}
                                    toggleSetting={this.toggleSetting}
                                    enableViSub={this.state.enableViSub}
                                    enableJaSub={this.state.enableJaSub}
                                    toggleSub={this.toggleSub} />
                <JaSubView
                  data={this.state.subJALoading
                    ? ''
                    : this.state.currentSubIndex < 0
                      ? ''
                      : this.state.subs.JA[this.state.currentSubIndex].text}
                  enableJaSub={this.state.enableJaSub}
                  enableViSub={this.state.enableViSub} />

              </Player>
            </div>
          </div>

          <div className={styles['col-secondary']}>
            <SubtitleBar
              subs={this.state.subJALoading ? [] : this.state.subs.JA}
              isLoading={this.state.subJALoading}
              seek={this.seek}
              currentSubIndex={this.state.currentSubIndex} />
          </div>
        </div>
    )
  }
}

PlayBoard.propTypes = {
  getMoviePlayDataSuccess: PropTypes.bool,
  moviePlayData: PropTypes.object,
}
