import React from 'react';

const ListItem = (props) => {
 let location = `${props.city}, ${props.state}`;

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>{location}</ul>
      <ul>{props.description}</ul>
    </div>
  )   
}



export default ListItem;
