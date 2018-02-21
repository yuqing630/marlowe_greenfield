import React from 'react';
import ListItem from './listItem.jsx'

const List = (props) =>  (
  <ul>
   { props.posts.map((post, idx) => 
      <ListItem key={idx} post={post} title={post.title} description={post.description} city={post.city} state={post.state}/>
 )}
 </ul>
)


export default List;
