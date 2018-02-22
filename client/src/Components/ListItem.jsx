import React from 'react';

const ListItem = (props) => {
 let location = `${props.city}, ${props.state}`;

  return (
  	<div className="listItem">
    <div onClick={function() {console.log("clicked!!!!!");
         props.handleClick(props.post);           
                                                      }}>
      <h2>{props.title}</h2>
      <ul>{location}</ul>
    </div>
    </div>
  ) 
}



export default ListItem;
