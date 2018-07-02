import React, { Component } from 'react'
import { connect } from 'react-redux'
//import actions
import { fetchUser } from './actions/userActions'
//import component
import TopBar from './components/TopBar'
import Home from './components/Home'
//import style
import './App.css'

class App extends Component {
  componentWillMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <div>
        <TopBar />
        <Home />
      </div>
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
