import React from 'react'
import PropTypes from 'prop-types'

//import plugins
import classNames from 'classnames'

//import styles
import * as styles from './FilterBarInput.less'
import * as styles_page from './FilterPage.less'
import * as styles_bar from './FilterSideBar.less'

export default class FilterBarInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    this.props.onChange(e, e.target.value)
  }

  render () {
    return (
      <div className={classNames(styles.wrap, styles_bar['input-wrap'], styles_page['input-wrap'])}>
          <input type='text' value={this.props.value}
                 onChange={this.handleInputChange}
                 placeholder='Tìm Kiếm...' />
          <div className={styles['search-icon']} />
      </div>
    )
  }
}
