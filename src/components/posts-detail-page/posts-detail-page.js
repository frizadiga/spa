import React from 'react';
import './posts-detail-page.scss';
import PostsDetail from '../posts-detail';

const PostsDetailPage = (props) => {
  const { match } = props;
  return (
    <div className="posts-detail-page">
      <PostsDetail id={match.params.id} />
    </div>
  );
}

export default PostsDetailPage;