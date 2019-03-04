import React, { Component, PropTypes } from 'react'

class ItemDetail extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      item: {}
    }
  }

  render(){
    return(
      <div className="itemDetail">
        <img src={this.state.item.thumbnail}/>
        <div>$ {this.state.item.price}</div>
        <div>{this.state.item.title}</div>
      </div>
    )
  }
}

ItemDetail.propTypes = {}
ItemDetail.defaultProps = {}

export default ItemDetail