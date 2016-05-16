import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './views/App.jsx'
import Home from './views/Home/index.js'
import Picture from './views/Picture/index.js'
import Chat from './views/Chat/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/picture' component={Picture} />
    <Route path='/chat' component={Chat} />
  </Route>
)
