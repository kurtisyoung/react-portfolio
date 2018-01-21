import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/index'

if (typeof window === 'undefined') {
  global.window = {}
}

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
)

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  {}, // initial state
  enhancer
)
/* eslint-enable */

export default store
