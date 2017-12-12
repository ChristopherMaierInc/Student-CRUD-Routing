import React from 'react';

const ListItem = ({ name, photo, bio, id, handleDelete }) => (
  <div>
    <ul>
      <li>
        <a href={`/students/${id}`}>
          <img className="avatar" src={ photo } alt={ bio }/>
        </a>
      </li>
      <li><strong>{ name }</strong></li>
      <li>{ bio }</li>
      <li><button onClick={ () => handleDelete(id) }>Delete</button></li>
    </ul>
  </div>
)

export default ListItem;
