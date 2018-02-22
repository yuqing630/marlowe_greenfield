import React from 'react';
import moment from 'moment';
const DescriptionCard = (props) => (
      <div style={{backgroundColor:'#1574cd', borderRadius:'5px'}}>
        <h2>{props.featuredItem.title}</h2>
        <p>{props.featuredItem.city}, {props.featuredItem.state} {props.featuredItem.address}</p>
        <p>posted on:{moment(parseInt(props.featuredItem.createdAt)).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{props.featuredItem.description}</p>
        <p>Reach me at: {props.featuredItem.emailAddress}</p>
        <button onClick={() => props.claimHandler(props.featuredItem.id)}>Claim</button>
      </div>

)
export default DescriptionCard;
