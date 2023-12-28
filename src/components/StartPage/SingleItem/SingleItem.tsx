import React from "react";

import  './SingleItem.css';


const SingleItem = (props) => { 


  return (
    <div className="singleItem">
      <p>{props.productTitle}</p> 
        <br />
        <img src={props.imageLink} alt='' className="productImage" />
        <br />
        <a href={`https://www.${props.linkToProduct}`} target="_blank">go to item!</a>
        <br /> <br />
        <hr />
    </div>
  )
}

export default SingleItem;