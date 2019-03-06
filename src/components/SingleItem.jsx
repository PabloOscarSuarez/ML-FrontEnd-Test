//Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const SingleItem = (props) => {
  return(
    <div className="single-item">
      <Link to={`/items/${props.id}`}>
        <img src={props.picture} alt={props.title}/>
      </Link>
      <div className="item-price">
        <span className="price-tag">
          $ {props.price} {props.decimals>0 && props.decimals}
        </span>
      </div>
      <Link to={`/items/${props.id}`}>
        <span className="item-title">{props.title}</span>
      </Link>
      {props.free_shipping && <div className="item-shipping">ICONO DE FREE SHIPPING</div>}
      <div>
        {props.address}
      </div>
    </div>
  )
}

export default SingleItem
