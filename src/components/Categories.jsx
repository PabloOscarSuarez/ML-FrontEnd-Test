import React, {Component, PropTypes} from 'react'

class Categories extends Component{
  constructor(...props){
    super(...props)
    this.state = {
      categories : props.categories
    }
  }

  render(){
    let list = []
    for (let i = 0; i < this.state.categories.length; i++){
      list.push(<Category name={this.state.categories[i]}/>)
      list.push(<Separator/>)
    }
    list.push(<Category className="last" name={this.state.categories[length - 1]}/>)
    
    return <div>{ list }</div>
  }
}

function Separator(props){
  return <span className="separator">{">"}</span>
}

function Category(props){
  return <span className={`${props.className||""}category`}>{props.name}</span>
}

Categories.propTypes = {}
Categories.defaultProps = {}

export default Categories