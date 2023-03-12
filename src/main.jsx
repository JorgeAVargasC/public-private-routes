import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RecoilRoot } from 'recoil'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
)
