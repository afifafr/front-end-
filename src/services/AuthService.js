import axios from 'axios';

// Your JWT secret key, replace it with a strong and unique key
const jwtSecretKey = 'your_secret_key';

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    return response.data.token;
  } catch (error) {
    throw new Error('Authentication failed. Check your credentials and try again.');
  }
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('/api/user/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.profile;
  } catch (error) {
    throw new Error('Failed to fetch user profile.');
  }
};

export const updateUserProfile = async (newUsername, newEmail, password) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put('/api/user/update', { newUsername, newEmail, password }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { success: true, message: response.data.message };
  } catch (error) {
    throw new Error('Failed to update user profile. Check your credentials and try again.');
  }
};

export const deleteUserAccount = async (password) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete('/api/user/delete', {
      headers: { Authorization: `Bearer ${token}` },
      data: { password },
    });
    return { success: true, message: response.data.message };
  } catch (error) {
    throw new Error('Failed to delete user account. Check your credentials and try again.');
  }
};