import React, { Component } from 'react'
import { connect } from 'react-redux'
//import actions
import { fetchUser } from './actions/userActions'
//import component
import TopBar from './components/TopBar'
import HomeCarousel from './components/HomeCarousel'
//import style
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  state = {
    screenWidth: 0,
  }

  componentWillMount () {
    this.props.fetchUser()
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)

  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions () {
    this.setState({screenWidth: window.innerWidth})
  }

  render () {
    const screenWidth = this.state.screenWidth
    return (

      <div>
        {this.props.fetchUserSuccess ? <TopBar /> : <h1>on loading top bar</h1>}
        {/*<HomeCarousel screenWidth={screenWidth} />*/}
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
