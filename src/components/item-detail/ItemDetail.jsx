//Dependencies
import React, { Component } from 'react'
//Components
import Categories from '../item-categories/Categories.jsx'

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
        <section className="detail-section"> 
        <Categories categories={this.state.categories}/>
              <div className="detail-container">
                <div className="item-detail-container">
                  <span className="item-image">
                    <img src={item.picture} alt={item.title} width="680px"/>
                  </span>
                  <div className="item-description">
                    <h2>{item.title}</h2>
                    {!!item.description ? 
                      <p className="item-description-text">{item.description}</p>
                      :
                      <p className="item-description-text">El vendedor no incluyó una descripción del producto</p>
                    }
                  </div>                            
                </div>
                <div className="item-info-container">    
                  <div className="item-info__status">
                    {item.condition == 'new' ? 'Nuevo' : 'Usado'}
                    {item.sold_quantity > 0 ? ` - ${item.sold_quantity} vendidos` : ' - Sé el primero en comprarlo!'}
                  </div>
                  <h1 className="item-info__title">{item.title}</h1>                
                  <div className="item-info__price">
                    {item.price.amount} {item.price.decimals>0 && item.price.decimals}
                  </div>                    
                  <button className="btn--primary" aria-label="comprar">
                    Comprar  
                  </button>
                </div>
              </div>
            </section>
          )
    } else if (this.state.noResults) {
      return (
        <section className="no-results">
          <div className="no-results__info">
            <h2>El producto solicitado no se encuentra disponible.</h2>
            <ul>
              <li>Navega por las categorías para encontrar un producto similar.</li>
            </ul>
          </div>  
        </section>
      )
    } else return null
  }
}

export default ItemDetail