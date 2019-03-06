//Dependencies
import React from 'react'

const Category = props => {

  return(
    <span className={ (props.lastCat? 'last-' : '' ) + "category"}>
      {props.name}
      {!props.lastCat && <i className="separator">{' > '}</i>
      }
    </span>
  )
}

export default Category