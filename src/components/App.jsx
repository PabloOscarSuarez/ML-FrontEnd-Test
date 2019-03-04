import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Items from './Items.jsx'
import Error404 from './Error404.jsx'

const App = (...props) => (
  <div className='container'>
    <Header/>
    <Switch>
      <Route exact path='/'/>
      <Route path='/items' component={ Items }/>
      <Route component={ Error404 }/>
    </Switch>
  </div>
)

export default App 