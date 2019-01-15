import React, { useState, useEffect } from 'react';
import './home-page.scss';
import Users from '../users'

const HomePage = () => {
  return (
    <div className="home-page">
      HomePage
      <Users />
    </div>
  );
}

export default HomePage;