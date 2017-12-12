import React from 'react';

const ListItem = ({ name, photo, bio }) => (
  <div>
    <ul>
      <li><img className="avatar" src={ photo } alt={ bio }/></li>
      <li><strong>{ name }</strong></li>
      <li>{ bio }</li>
    </ul>
  </div>
)

export default ListItem;
