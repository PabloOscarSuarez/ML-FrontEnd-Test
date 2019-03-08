//Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchSubmit(e){
    e.preventDefault()
    this.props.onSearchSubmit(this.query.value)
  }

  render(){
    return(
      <header className="main-header">
        <div className="l-container main-header__block">
          <Link to="/" className="main-logo"/>
            <form onSubmit={this.handleSearchSubmit} className="main-form">
              <input 
                className="main-form__input"
                type="text"
                placeholder="Nunca dejes de buscar" 
                aria-label="Nunca dejes de buscar"
                ref={node => this.query=node} 
                defaultValue={this.props.search} 
              />
              <button type="submit" className="main-form__btn" aria-label="buscar">
                <i className="main-form__search-icon">
                  <span>Buscar</span>
                </i>
              </button>
            </form>
        </div>        
      </header>
    )
  }
}

export default Header