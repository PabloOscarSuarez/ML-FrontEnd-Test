//Dependencies
import React, { Component } from 'react'
import queryString from 'query-string'

//Components
import Categories from './Categories.jsx'
import SingleItem from './SingleItem.jsx'

class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: [],
      items: [],
      noResults: false
    }
  }
  //Parsea la location y obtiene los items con las categorias de acuerdo a la búsqueda realizada
  getItems(){
    const query = queryString.parse(location.search),
          parsedQuery = query.search
    fetch(`/api/items?q=${parsedQuery}`)
    .then( res => {
      return res.json()
    })
    .then( data => {
      // console.log(data)
      this.setState({
        categories: data.categories,
        items: data.items,
        noResults: !!data.items
      })
    })
  }

  //Obtiene los resultados cuando renderiza por primera vez
  componentDidMount(){
    this.getItems()
  }
  //Obtiene los resultados de una nueva busqueda
  componentDidUpdate(prevProps) {
    if ( this.props.location.search != prevProps.location.search ) {
      this.setState({
        categories: [],
        items: [],
        noResults: false
      })
      this.getItems()
    }
  }  
  //Renderiza los resultados
  render() {
    const { categories, items } = this.state
    if(items.length) {
      let results = items.map( item => {
        return <SingleItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  currency={item.price.currency}
                  price={item.price.amount}
                  decimals={item.price.decimals}
                  picture={item.picture}
                  condition={item.condition}
                  free_shipping={item.free_shipping}
                  address={item.address}
                />
        })
      return(
        <div className="results">
          <Categories categories={categories}/>
          {results}
        </div>
      )
    } else if (this.state.noResults) {
        return (
          <div className="info">
            <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
            <ul>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
              <li>Navega por las categorías para encontrar un producto similar.</li>
            </ul>
          </div>
      )
    } else return null
  }
}

export default Results