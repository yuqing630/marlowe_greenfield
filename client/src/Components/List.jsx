import React from 'react';

function List(props) => (
  <ul>
    {props.items.map((item, i) => 
       <ListItem title={item.title} description={item.description} location=({item.city} + ', ' + {item.state})/>
    )}
  </ul>
);
