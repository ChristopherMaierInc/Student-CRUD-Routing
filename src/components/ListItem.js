import React, { Component } from 'react';

const ListItem = ({ name, photo, bio }) => (
  <div>
    <ul>
      <li><img src={ photo } alt={ bio }/></li>
      <li>{ name }</li>
      <li>{ bio }</li>
    </ul>
  </div>
)

export default ListItem;
