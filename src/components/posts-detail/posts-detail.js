import React, { useState, useEffect } from 'react';
import './posts-detail.scss';
import Fetch from '../../lib/Fetch';
import CommentsList from '../comments-list';

const PostsDetail = (props) => {
  const { id } = props;
  const [ data, setData ] = useState({});

  const fetchData = async () => {
    const response = await Fetch(`/posts/${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { console.log('now', props); fetchData(); }, {});

  return (
    <div className="posts-detail">
      <div className="posts-detail__item">
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
      </div>
      <div className="posts-detail__comments">
        Comments
        <CommentsList id={id} />  
      </div>
    </div>
  );
}

export default PostsDetail;