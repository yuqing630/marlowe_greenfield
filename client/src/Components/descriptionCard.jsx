import React from 'react';

const DescriptionCard = (props) => (

    <div style={{backgroundColor:'#1574cd', borderRadius:'5px'}}>
      <h2>{props.title}</h2>

      <ul>{props.description}</ul>
      <button onClick={function() {props.handleClaim()}}>Claim</button>
    </div>   
)


export default DescriptionCard;