import React from 'react'
// import component
import { Link } from 'react-router-dom'
import AutoComplete from './AutoComplete'
// import plugins
import classNames from 'classnames'
import { WithWindowSize } from 'components/WindowSize'
//import constant
import API_DOMAIN from 'constants/api'
//import styles
import * as styles from './SearchBar.less'
import { convertToUrl } from '../../utils'

class SearchBar extends React.PureComponent {
  state = {
    value: '',
    unitedStates: [],
    loading: false,
  }
  fetchData = (name) => {
    let query = `{
movies(title_en:"${name}") {
    titles {
      romaji
    }
    _id
  }
}`
    fetch(API_DOMAIN, {
      method: 'POST',
      body: JSON.stringify({query: query}),
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => (data.data !== null) && this.setState(
        {
          unitedStates: data.data.movies.map(
            mv => ({abbr: mv.titles.romaji, name: mv.titles.romaji, id: mv._id})),
          loading: false,
        }))
  }

  render () {
    return (
      <AutoComplete
        inputProps={{id: 'states-autocomplete'}}
        wrapperStyle={{
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          maxWidth: 350,
          height: 40,
          margin: '0 20px',
        }}
        value={this.state.value}
        items={this.state.unitedStates}
        getItemValue={(item) => item.name}
        onSelect={(value, item) => {
          this.setState({value: '', unitedStates: []})
        }}
        onChange={(event, value) => {
          this.setState({value}, () => value.length > 0 ?
            this.setState({loading: true}, () => this.fetchData(value)) :
            this.setState({loading: false, unitedStates: []}))
        }}
        renderMenu={children => (
          <div className={styles['result-box']}>

            {this.state.value.length > 0 ? children.length > 0 ? children :
              <p>Không có kết quả nào</p> :
              <p>Tên Anime, Drama, Nhạc </p>}

          </div>
        )}
        renderInput={props => (
          <div className={styles['search-box']}>
            <input {...props} placeholder="Tìm kiếm..." />
            <div className={classNames(styles['search-icon'],
              {[styles.loading]: this.state.loading})} />
            <div className={classNames(styles['load-icon'],
              {[styles.loading]: this.state.loading})}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        )}


        renderItem={(item, isHighlighted) => (
          <Link
            className={classNames(styles.item,
              {[styles.highlighted]: isHighlighted})}
            key={item.abbr}
            to={`/movie/play/${convertToUrl(item.name, item.id)}`}>
            {item.name}
          </Link>
        )}
      />
    )
  }
}

export default WithWindowSize(SearchBar)
