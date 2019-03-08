//Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const SingleItem = props => {
  return(
    <li key={props.id} className="single-item">
      <div className="single-item__row">
        <div className="single-item__image">
          <Link to={`/items/${props.id}`}>
            <img src={props.picture} alt={props.title}/>
          </Link>
        </div>
        <div className="single-item__info">
          <div className="single-item__info_location">
            {props.address}
          </div>
          <div className="single-item__info_price">
            <span className="price-tag">
              {props.price} {props.decimals>0 && props.decimals}
            </span>
            {props.free_shipping && (
            <span 
              className="single-item__info_shipping" 
              title="Envío sin cargo a todo el país"
            >
              &nbsp;
            </span>
          )}
          </div>
          <Link to={`/items/${props.id}`}>
            <h2 className="single-item__info_title">{props.title}</h2>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default SingleItem