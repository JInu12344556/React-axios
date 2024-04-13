import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserForm = ({ userId, onClose }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = { id: userId, name, email };
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
      console.log('User updated:', response.data);
      // Reset form fields if needed
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  };

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Update User</button>
        <button onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default EditUserForm;
