import React, { useState, useEffect } from 'react';
import { updateUserProfile } from '../services/AuthService'; // Assuming you have a function for updating user profile

const UserUpdate = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Assuming updateUserProfile returns a success message or an error
      const response = await updateUserProfile(newUsername, newEmail, password);
      if (response.error) {
        setError(response.error);
        setUpdateSuccess(false);
      } else {
        setUpdateSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError('An error occurred while updating user profile.');
      setUpdateSuccess(false);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {updateSuccess && <p style={{ color: 'green' }}>Profile updated successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpdate}>
        <label>
          New Username:
          <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        </label>
        <br />
        <label>
          New Email:
          <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserUpdate;
