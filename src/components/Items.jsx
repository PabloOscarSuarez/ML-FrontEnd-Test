//Dependencies
import React, { Component } from 'react'
import { 
  Switch, 
  Route 
} from 'react-router-dom'
//Components
import Results from './Results.jsx'
import ItemDetail from './ItemDetail.jsx'

class Items extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path='/items' component={Results}/>
        <Route path='/items/:id' component={ItemDetail}/>
      </Switch>
    )
  }
}

export default Items