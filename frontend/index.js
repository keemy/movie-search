import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'


import App from './containers/App'
import Movie from './containers/Movie'
import configureStore from './store/configureStore'

const store = configureStore()
const appHistory = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), store);

require('./application.css')
render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path= "/" component={App}/>
      <Route path="movie/:movieId" component={Movie}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
