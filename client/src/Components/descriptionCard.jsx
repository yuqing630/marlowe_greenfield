import React from 'react';
import moment from 'moment';
const DescriptionCard = (props) => {
	console.log('this is the date 4', props.featuredItem);
	return (
      <div style={{backgroundColor:'#1574cd', borderRadius:'5px'}}>
        <h2>{props.featuredItem.title}</h2>
        <p>{props.featuredItem.city}, {props.featuredItem.state} {props.featuredItem.address}</p>
        <p>posted on: {moment(props.featuredItem.createdAt * 1000).format('MMMM Do YYYY')}</p>
        <p>{props.featuredItem.description}</p>
        <p>Reach me at: {props.featuredItem.emailAddress}</p>
        <img height='150px' src={props.featuredItem.photoUrl}/>
        <button onClick={() => props.claimHandler(props.featuredItem.id)}>Claim</button>
      </div>
	)
}


export default DescriptionCard;
