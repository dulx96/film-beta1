import React from 'react'

const WindowSizeContext = React.createContext()

//provider
class WindowSize extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0,
    }
  }

  handleResize () {
    // set initial state
    this.setState({
      width: window.innerWidth,
    })
  }

  componentDidMount () {
    // bind window resize listeners
    this._handleResize = this.handleResize.bind(this)
    this._handleResize()
    window.addEventListener('resize', this._handleResize)
  }

  componentWillUnmount () {
    // clean up listeners
    window.removeEventListener('resize', this._handleResize)
  }

  render () {
    return (
      <WindowSizeContext.Provider value={this.state}>
        {this.props.children}
      </WindowSizeContext.Provider>
    )
  }
}

//consumer wrap
const WithWindowSize = (Component) => props => (
  <WindowSizeContext.Consumer>
    {({width}) => (<Component {...props} windowWidth={width} />)}
  </WindowSizeContext.Consumer>
)
export { WindowSize, WithWindowSize }

