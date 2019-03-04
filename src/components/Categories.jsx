import React, {Component} from 'react'

class Categories extends Component{
  constructor(props){
    super(props)
    this.state = {
      categories : props.categories
    }
  }

  render(){
    const list = this.state.categories.map( (c) => {
      <span>{c}</span>
    })
    console.log('prueba')
    console.log(this.state.categories)
    console.log(list)
    return list
  }
}

export default Categories