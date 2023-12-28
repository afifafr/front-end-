import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/AuthService';


 // Assuming you have a function for fetching user profile

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile when the component mounts
    const fetchUserProfile = async () => {
      try {
        // Assuming getUserProfile returns user profile data or an error message
        const response = await getUserProfile();
        setProfile(response);
      } catch (error) {
        // If an error occurs, set the profile state with an error message
        setProfile({ error: 'An error occurred while fetching user profile.' });
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {profile && profile.error && <p style={{ color: 'red' }}>{profile.error}</p>}
      {profile && !profile.error && (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          {/* Additional profile information can be displayed here */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;