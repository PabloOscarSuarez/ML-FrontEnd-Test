import React, { Component } from 'react'

class Header extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            search: props.search
        }
    }

    render() {
        return ( 
            <div>
                <input type="text" value={ this.state.search }/> 
                <button type="submit" onClick={ this.search.bind(this) } > Buscar </button> 
            </div>
        )
    }

    search() {
        console.log(this.state.search)
    }
}

export default Header