import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

//import actions
import  {fetchUser} from './actions/userActions'
//import component
import TopBar from './components/TopBar'
//import style
import './App.css'

//create the redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchUser())
  }
  render () {
    return (
      <div>
        <TopBar/>
      </div>
    )
  }
}

export default () => <Provider store={store}>
  <App />
</Provider>
