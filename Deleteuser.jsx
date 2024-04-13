import React from 'react';
import axios from 'axios';

const DeleteUserButton = ({ userId }) => {
  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        console.log('User deleted:', response.data);
        // Optionally, update state or trigger a refresh
      })
      .catch(error => {
        console.error('Error deleting user: ', error);
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteUserButton;
