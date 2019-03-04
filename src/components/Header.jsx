import React, { Component, PropTypes } from 'react'

class Header extends Component {
  constructor(...props){
    super(...props)
  }

  render(){
    return(
      <form onSubmit={this.submit.bind(this)}>
        <input type="text" ref={node => this.query=node} value={this.props.search}/>
        <button type="submit">Buscar</button>
      </form>
    )
  }

  submit(e){
    e.preventDefault()
    console.log(this.query.value)
  }
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header