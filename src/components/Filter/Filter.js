import React from 'react'
import PropTypes from 'prop-types'

//import component
import FilterBarInput from './FilterBarInput'
import FilterResults from './FilterResults'
//import plugins
import classNames from 'classnames'
//import constant
import API_DOMAIN from 'constants/api'
//import styles
import * as styles_page from './FilterPage.less'
import * as styles_bar from './FilterSideBar.less'

class Filter extends React.PureComponent {
  static propTypes = {
    bar_style: PropTypes.bool,
  }
  static defaultProps = {
    bar_style: false,
  }

  constructor (props) {
    super(props)
    this.state = {
      value: '',
      loading: false,
      results: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  fetchData (value) {
    //when value = 0 fetch all data,
    //TODO pagination or scroll to load more with big data
    let query = value.length > 0 ? `{
                    movies(title_en:"${value}") {
                      titles {
                        romaji
                        }
                        _id
                          }
                  }` : `{
                    movies(title_en:"${value}") {
                      titles {
                        romaji
                        }
                        _id
                          }
                  }`
    //set state loading before fetch
    if (value.length === 0 && this.props.bar_style) {
      this.setState({results: []})
      return
    }
    this.setState({loading: true}, () => fetch(API_DOMAIN, {
      method: 'POST',
      body: JSON.stringify({query: query}),
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => data !== null && this.setState(
        {
          results: data.data.movies,
        }, () => this.setState({loading: false}))))

  }

  //call back when input change
  handleInputChange (e, value) {
    this.setState({value}, () => this.fetchData(value))
  }

  componentDidMount () {
    this.fetchData(this.state.value)
  }

  render () {
    return (
      <div className={classNames({
        [styles_bar.wrap]: this.props.bar_style,
        [styles_page.wrap]: !this.props.bar_style,
      })}>
        <div className={this.props.bar_style
          ? styles_bar['filter-box']
          : styles_page['filter-box']}>
          <FilterBarInput value={this.state.value}
                          onChange={this.handleInputChange} />
        </div>
        <div className={this.props.bar_style
          ? styles_bar['result-box']
          : styles_page['result-box']}>
          <FilterResults data={this.state.results}
                         loading={this.state.loading}
                         bar_style={this.props.bar_style} />
        </div>
      </div>
    )
  }
}

export default Filter
