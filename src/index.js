//Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route
} from 'react-router-dom'
//Components
import App from './components/App.jsx'

ReactDOM.render( 
  <Router>
    <Route component={ App }/>            
  </Router>,
  document.getElementById('app')
)