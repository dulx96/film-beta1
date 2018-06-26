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
    families: ['Roboto Condensed:400, 700', 'sans-serif'],
  },
})
//create the redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)
const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}>
    <App />
  </Provider>, rootElement)
} else {
  render(<Provider store={store}>
    <App />
  </Provider>, rootElement)
}
registerServiceWorker()
