import React from 'react';
import { PropTypes as T } from 'prop-types';
import './posts-detail-page.scss';
import PostsDetail from '../posts-detail';

const PostsDetailPage = (props) => {
  const { match } = props;
  return (
    <div className="posts-detail-page">
      <PostsDetail id={match.params.id} />
    </div>
  );
};

PostsDetailPage.propTypes = {
  match: T.object.isRequired,
};

export default PostsDetailPage;
