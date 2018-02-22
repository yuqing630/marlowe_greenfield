import React from 'react';
import moment from 'moment';
const DescriptionCard = (props) => (
      <div style={{backgroundColor:'#1574cd', borderRadius:'5px'}}>
        <h2>{props.featuredItem.title}</h2>
        <p>posted on:{moment(props.featuredItem.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{props.featuredItem.description}</p>
        <p>{props.featuredItem.city}, {props.featuredItem.state} {props.featuredItem.address}</p>
        <button onClick={() => props.claimHandler(props.featuredItem.id)}>Claim</button>
      </div>
  
)
export default DescriptionCard;
