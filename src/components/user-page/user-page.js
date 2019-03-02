import React from 'react';
import { PropTypes as T } from 'prop-types';
import './user-page.scss';
import UsersDetail from '../users-detail';
import PostsList from '../posts-list';
import AlbumsList from '../albums-list';

const UserPage = (props) => {
  const { match } = props;
  const userID = match.params.id;

  return (
    <div className="user-page">
      <UsersDetail id={userID} />
      <PostsList id={userID} />
      <AlbumsList id={userID} />
    </div>
  );
};

UserPage.propTypes = {
  match: T.object.isRequired,
};

export default UserPage;
