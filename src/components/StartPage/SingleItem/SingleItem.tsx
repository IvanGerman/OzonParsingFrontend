import React from "react";

import  './SingleItem.css';


const SingleItem = (props) => { 


  return (
    <div className="singleItem">
      <p>{props.productTitle}</p> 
      <br />
      <a href={`https://www.${props.linkToProduct}`} target="_blank">
        <img src={props.imageLink} alt='' className="productImage" />
      </a>
      <br /> <br />
      <p>Bonus:  {props.bonusValue}</p>
      <p>Price: {props.productPrice}</p>
      <p>
        <span>Difference: </span> 
        <span className="difference">{props.difference}</span>
      </p>
      <hr />
    </div>
  )
}

export default SingleItem;