//Dependencies
import React, { Component } from 'react'
//Components
import Category from './Category.jsx'

class Categories extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const catLength = this.props.categories.length
    if(catLength){
      var catList = []
      for (let i = 0; i < catLength - 1; i++){
        const category = this.props.categories[i]
        catList.push(<Category key={category} name={category}/>)
      }
      const lastCat = this.props.categories[catLength-1]
      catList.push(<Category lastCat key={lastCat} name={lastCat}/>)
      return <div>{ catList }</div>
    } else {
      return null
    }
  }
}
export default Categories