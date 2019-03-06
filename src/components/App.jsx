//Dependencies
import React, { Component } from 'react'
import { 
  Switch, 
  Route 
} from 'react-router-dom'
import queryString from 'query-string'
//Components
import Header from './Header.jsx'
import Items from './Items.jsx'
import Error404 from './Error404.jsx'

class App extends Component {
  constructor(props){
    super(props)
    const parsedQuery = queryString.parse(props.location.search)
    // console.log(parsedQuery)
    this.state = {
      search: parsedQuery.search || ''
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchSubmit(query) {
    this.props.history.push({pathname: '/items', search:`search=${query}`})
    this.setState({search : query})
  }

  render() {
    return(
      <div className='container'>
        <Header
          search = {this.state.search}
          onSearchSubmit = {this.handleSearchSubmit}
        />
        <Switch>
          <Route exact path='/' render={ null }/>
          <Route path='/items' component={ Items }/>
          <Route component={ Error404 }/>
        </Switch>
      </div>
    ) 
  }
}

export default App