/* eslint-disable no-console */
import React from 'react'
import './index.css'
import App from './App'
import { hydrate, render } from 'react-dom'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import registerServiceWorker from './registerServiceWorker'
//reset css
import 'normalize.css'
//import font
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:300,400,500', 'sans-serif'],
  },
})

const middlewares = []
middlewares.push(thunk)
if (process.env.NODE_ENV === 'development') {
  // const {createLogger} = require(`redux-logger`)
  // const logger = createLogger()
  const logger = store => next => action => {
    console.log('wtf')
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }
  middlewares.push(logger)
}
//create the redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares),
)
const rootElement = document.getElementById('root')
render(<Provider store={store}>
  <App />
</Provider>, rootElement)
registerServiceWorker()
