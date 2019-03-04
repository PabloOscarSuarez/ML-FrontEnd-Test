import React, { Component, PropTypes } from 'react'

class Results extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="results">{this.state.items}</div>
    )
  }

  componentDidMount(){
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=guitarra')
      .then( results => {
        return results.json()
      })
      .then( data => {
        let items = data.results.map( item => {
          return(
            <Item key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price}/>
          )
        })
        this.setState(items)
      })
  }

}

function Item(props) {
  return(
    <div className="item">
      <img src={this.state.item.thumbnail}/>
      <div>$ {this.state.item.price}</div>
      <div>{this.state.item.title}</div>      
    </div>
  )
}

Results.propTypes = {}
Results.defaultProps = {}

export default Results