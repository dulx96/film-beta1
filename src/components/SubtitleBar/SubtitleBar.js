/* eslint-disable no-console */
import React from 'react'

//import plugins
import AnchorLink from 'react-anchor-link-smooth-scroll'
//import styles
import * as styles from './SubtitleBar.less'

export default class subtitleBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      isScrolling: false,
      subs: [],
    }
    this.subBar = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)

  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (!nextProps.isLoading && prevState.isLoading) {
      return {
        isLoading: false,
        subs: nextProps.subs,
      }
    } else {
      return null
    }
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   return (nextState.isLoading !== this.state.isLoading) ||
  //     (nextProps.currentSubIndex !== this.props.currentSubIndex)
  // }

  handleScroll () {
    this.setState({isScrolling: true})
    clearTimeout(this.controlScrollTimer)
    this.controlScrollTimer = setTimeout(() => {
      this.setState({isScrolling: false})
    }, 3000)
  }

  render () {
    return (
      <div className={styles.wrap} onScroll={this.handleScroll}>

        {this.props.isLoading ? <div> loading sub</div> : <div ref={this.subBar}
                                                               className={styles['sub-content']}
                                                               >
          <SubItem subs={this.state.subs} seek={this.props.seek} />
        </div>}
      </div>
    )
  }
}

class SubItem extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return false
  }

  render () {
    const subs = this.props.subs.map(
      (sub, index) => (
        <div key={index}  onClick={this.props.seek(sub.startTime / 1000)}
             className={styles['sub-item']}> {sub.text} </div>))
    return (
      <div>
        {subs}
      </div>
    )
  }
}
