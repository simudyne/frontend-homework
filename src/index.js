import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import reducers from './reducers'
import { rootSaga } from './sagas'
import './styles/styles.css'

const sagaMiddleware = createSagaMiddleware()

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhances(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
