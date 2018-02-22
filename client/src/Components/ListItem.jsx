import React from 'react';

const ListItem = (props) => {
 let location = `${props.city}, ${props.state}`;

  return (
  	<div className="listItem">
    <div onClick={function() {console.log("clicked!!!!!");
         props.handleClick(props.post);           
                                                      }}>
      <div className="listHeader">{props.title}</div>
      <div className="listDescription">{location}</div>
    </div>
    </div>
  ) 
}



export default ListItem;
