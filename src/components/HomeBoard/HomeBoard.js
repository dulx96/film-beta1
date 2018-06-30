import React from 'react'
import PropsTypes from 'prop-types'
//import component
import SideBar from '../SideBar'

//import plugin
import classNames from 'classnames'
//import style
import * as style from './HomeBoard.less'

class HomeBoard extends React.Component {

  render () {
    return (
      <div className={classNames({
        [style.wrap]: true,
        [style.active]: this.props.homeBoardIsActive,
      })}>
        <SideBar/>
        <div className={style.container}>

        </div>
      </div>
    )
  }
}

HomeBoard.propTypes = {
  homeBoardIsActive: PropsTypes.bool,
}
export default HomeBoard
