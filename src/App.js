import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import UserRegistration from './components/UserRegistration';
import UserProfile from './components/UserProfile';
import UserUpdate from './components/UserUpdate';
import UserDeletion from './components/UserDeletion';
import UserLogin from './components/UserLogin';
import Users from './features/users';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect users to "/profile" on accessing the app directly */}
        <Route path="/" element={<Navigate to="/profile" replace />} />

        <Route path="/register" element={<UserRegistration />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/update" element={<UserUpdate />} />
        <Route path="/delete" element={<UserDeletion />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </Router>
  );
};
export default App;