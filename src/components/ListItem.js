import React from 'react';

const ListItem = ({ name, photo, bio, id }) => (
  <div>
    <ul>
      <li><img className="avatar" src={ photo } alt={ bio }/></li>
      <li><strong>{ name }</strong></li>
      <li>{ bio }</li>
      <li><button>Delete</button></li>
    </ul>
  </div>
)

export default ListItem;
