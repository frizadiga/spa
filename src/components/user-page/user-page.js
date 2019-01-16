import React, { useState, useEffect } from 'react';
import './user-page.scss';
import User from '../user';
import Posts from '../posts';
import Albums from '../albums';

const UserPage = (props) => {
  const { match } = props;
  const userID = match.params.id;

  return (
    <div className="user-page">
      UserPage
      <User id={userID} />
      <Posts id={userID} />
      <Albums id={userID} />
    </div>
  );
}

export default UserPage;