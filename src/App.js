import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//import actions
import { fetchUser } from './actions/userActions'
//import component
import TopBar from './components/TopBar'
import Home from './components/Home'
import MoviePlayPage from './components/MoviePlayPage'
import Filter from './components/Filter'
import MenuBar from 'components/MenuBar'

//import context
import { WindowSize } from './components/WindowSize'
import { MenuBarContext } from 'components/MenuBar'

//import style
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.toggleMenuBar = this.toggleMenuBar.bind(this)
    this.state = {
      menuBarActive: false,
      toggleMenuBar: this.toggleMenuBar,
    }
  }

  toggleMenuBar () {
    this.setState(prev => ({menuBarActive: !prev.menuBarActive}))
  }

  componentWillMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <Router>
        <WindowSize>
          <MenuBarContext.Provider value={this.state}>
            <TopBar />
          </MenuBarContext.Provider>
          {/*only visible on mobile device*/}
          <MenuBar
            active={this.state.menuBarActive}
            toggleMenuBar={this.toggleMenuBar} />
          <Route exact path="/" render={() => (
            <Redirect to="/home" />
          )} />
          <Route path="/home" component={Home} />
          <Route path="/movie/play" component={MoviePlayPage} />
          <Route path="/search" component={Filter} />
        </WindowSize>
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
