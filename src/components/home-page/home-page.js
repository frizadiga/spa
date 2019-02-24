import React from 'react';
import './home-page.scss';
import UsersList from '../users-list';

const HomePage = () => {
  return (
    <div className="home-page">
      <UsersList />
    </div>
  );
};

export default HomePage;
