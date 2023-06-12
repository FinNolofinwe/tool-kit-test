import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client/react'
import App from './components/app/App.tsx'
import './index.scss'
import client from './apollo/client.tsx'
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
          <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
)
