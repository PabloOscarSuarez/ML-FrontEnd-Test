//Dependencies
import React from 'react'

const Category = props => {

  return(
    <li className={ (props.lastCat? 'last-' : '' ) + "category"}>
      {props.name}
      {!props.lastCat && <i className="separator">{'  >  '}</i>
      }
    </li>
  )
}

export default Category