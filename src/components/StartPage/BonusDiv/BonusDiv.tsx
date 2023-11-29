import React from "react";

import  'BonusDiv.css';


const BonusDiv = (props) => { 


  return (
    <div className="bonusDiv">
      <p>{props.productTitle}</p> 
      <p>{props.linkToProduct}</p>
    </div>
  )
}

export default BonusDiv;