import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header.jsx'
import Categories from './components/Categories.jsx'

ReactDOM.render( < div > < h1 > Hola mundo!! < /h1> <Header / > < br / > < Categories categories = {
        ['autos', 'celulares', 'camperas', 'guitarras']
    }
    /> </div > , document.getElementById('app')
)