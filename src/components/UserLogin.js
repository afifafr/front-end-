import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:6000/api/auth/login', loginData);
      // Handle the response from the server, e.g., store the token or redirect to another page
      console.log(response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Your login form fields here */}
      <input
        type="text"
        placeholder="Username"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />

      {/* Trigger the login API call on button click */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;