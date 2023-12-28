import React, { useState } from 'react';
import { deleteUserAccount } from '../services/AuthService'; // Assuming you have a function for deleting user account

const UserDeletion = () => {
  const [password, setPassword] = useState('');
  const [deletionSuccess, setDeletionSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      // Assuming deleteUserAccount returns a success message or an error
      const response = await deleteUserAccount(password);
      if (response.error) {
        setError(response.error);
        setDeletionSuccess(false);
      } else {
        setDeletionSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError('An error occurred while deleting user account.');
      setDeletionSuccess(false);
    }
  };

  return (
    <div>
      <h2>Delete Account</h2>
      {deletionSuccess && <p style={{ color: 'green' }}>Account deleted successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleDelete}>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Delete Account</button>
      </form>
    </div>
  );
};

export default UserDeletion;