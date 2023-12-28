import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/users', formData);
      console.log('User created successfully:', response.data);
      // You can redirect to another page or update the UI as needed
    } catch (error) {
      console.error('Error creating user:', error.response.data.error);
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <label>Username:</label>
      <input type="text" name="username" onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} required />
      <label>Confirm Password:</label>
      <input type="password" name="confirmPassword" onChange={handleChange} required />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default UserRegistration;