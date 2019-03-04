import React, { Component, PropTypes } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Categories from './Categories.jsx'
import Results from './Results.jsx'
import ItemDetail from './ItemDetail.jsx'

class Items extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      items : {}
    }
  }

  componentDidMount(){
    fetch('/items')
      .then( results => {
        return results.json()
      })
      .then ( data => {
        let items = data.results.map( item => {
          return (
            <Item key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} />
          )
        })
        this.setState({items})
      })
  }

  render() {
    return (
      <items>
        <Categories categories={[1,2,3,4,5,6]}/>
        <Switch>
          <Route exact path='/items' render={ props => (
            <Results items={data}/>
          )}/>
          <Route path='/items/:id' render={ props => (
            <ItemDetail item={data}/>
          )}/>
        </Switch>
      </items>
    )
  }
}

Items.propTypes = {}
Items.defaultProps = {}

export default Items