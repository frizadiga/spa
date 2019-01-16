import React, { useState, useEffect } from 'react';
import './post-page.scss';
import Post from '../post';

const PostPage = (props) => {
  const { match } = props;
  return (
    <div className="post-page">
      PostPage
      <Post id={match.params.id} />
    </div>
  );
}

export default PostPage;