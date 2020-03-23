import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import client from './apollo'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
if (module.hot) module.hot.accept()
