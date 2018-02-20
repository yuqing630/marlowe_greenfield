import React from 'react';

function ListItem(props) => (
  <h1>{props.title}</h1>
  <ul>{props.description}</ul>
  <ul>{props.location}</ul>
)