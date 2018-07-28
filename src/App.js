import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import actions
import { fetchUser } from './actions/userActions'
//import component
import TopBar from './components/TopBar'
import Home from './components/Home'
import MoviePlayPage from './components/MoviePlayPage'
//import style
import './App.css'

class App extends Component {
  componentWillMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <Router>
        <div>
          <TopBar />
          <Route exact path="/" component={Home} />
          <Route path="/movie/play" component={MoviePlayPage} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({userReducer: {fetchUserSuccess}}) => (
  {
    fetchUserSuccess,
  }
)
const mapDispatchToProps = (dispatch) => (
  {
    fetchUser: () => dispatch(fetchUser()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
