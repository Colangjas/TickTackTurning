import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from './routes'
import Relay from 'react-relay'
import userRelay from 'react-router-relay'
import {
  RelayNetworkLayer,
  UrlMiddleware
} from 'react-relay-network-layer'
import { RelayAPI } from './config/endpoints'
import auth from './utils/auth'

const createHeaders = () => {

}

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={Routes}
  />,
  document.getElementById('root')
)