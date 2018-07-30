import React from 'react'
//import component
import SubItem from './SubItem'
//import plugins
import { Element, scroller } from 'react-scroll'
//import styles
import * as styles from './SubtitleBar.less'

export default class subtitleBar extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      isScrolling: false,
      subs: [],
    }
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

  //seek video when click subitem
  onSubItemClick (time) {
    this.props.seek(time)
  }

  // stop auto scroll to current sub when user scroll in 1.5s
  //TODO bug auto scroll and user scroll is same behavior, so system cant detect what performed by user, now solution is reduce the idle times or add mouse move event
  handleScroll () {
    this.setState({isScrolling: true})
    clearTimeout(this.controlScrollTimer)
    this.controlScrollTimer = setTimeout(() => {
      this.setState({isScrolling: false})
    }, 1200)
  }

  componentDidUpdate (prevProps) {
    //auto scroll to current subitems
    if (this.props.currentSubIndex >= 0 &&
      this.props.currentSubIndex !== prevProps.currentSubIndex) {
      this.state.isScrolling ||
      scroller.scrollTo(`subItem${this.props.currentSubIndex }`, {
        duration: 800,
        delay: 200,
        smooth: 'easeInOutQuart',
        containerId: 'subtitleBar',
      })
    }
  }

  render () {
    const subItem = this.state.subs.map(
      (sub, index) => <Element key={index} name={`subItem${index}`}>
        <SubItem
          index={index}
          active={this.props.currentSubIndex === index}
          sub={sub}
          onClick={this.onSubItemClick.bind(this)}
        />
      </Element>,
    )
    const scrollContainerMustHaveStyle = {position: 'relative'} // need this to make react-scroll work like a charm
    return (
      <div className={styles.wrap}>
        {this.state.isLoading ? <div> loading sub </div> :
          <Element id='subtitleBar'
                   style={scrollContainerMustHaveStyle}
                   className={styles['sub-container']}
                   onScroll={this.handleScroll}>
            {subItem}
          </Element>
        }
      </div>
    )
  }
}
