//Dependencies
import React, { Component } from 'react'
//Components
import Categories from './Categories.jsx'

class ItemDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: {},
      categories: [],
      noResults: false
    }
  }

  componentDidMount(){
    fetch(`/api/items/${this.props.match.params.id}`)
      .then( results => results.json()
      )
      .then( data => {
        if( data.status === 404 ){
          this.setState({
            noResults: true
          })
        } else {  
          this.setState({
            item: data.item,
            categories: data.categories,
            noResults: !!data.item            
          })
        } 
      })
  }

  render(){
    const item = this.state.item
    if(item.id){
      return(
        <main role="main">
          <div className="categories-nav">
            <Categories categories={this.state.categories}/>
          </div>
          <div className="item-detail">
            <img src={item.picture} alt={item.title}/>
            <div className="item-status">
              {item.condition == 'new' ? 'Nuevo' : 'Usado'}
              {item.sold_quantity > 0 ? ` - ${item.sold_quantity} vendidos` : ' - Sé el primero en comprarlo!'}
            </div>
            <h1>{item.title}</h1>
            <div className="item-price">
              <span className="price-tag">
                $ {item.price.amount} {item.price.decimals>0 && item.price.decimals}
              </span>
            </div>
            <section className="item-description">
              <h2>Descripción del producto</h2>
              {!!item.description ? 
                <p>{item.description}</p>
                :
                <p>El vendedor no incluyó una descripción del producto</p>
              }
            </section>                            
          </div>
        </main>
      )
    } else if (this.state.noResults) {
      return (
        <div className="info">
          <h3>El producto solicitado no se encuentra disponible</h3>
          <ul>
            <li>Navega por las categorías para encontrar un producto similar.</li>
          </ul>
        </div>
      )
    } else return null
  }
}

export default ItemDetail