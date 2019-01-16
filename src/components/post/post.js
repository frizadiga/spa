import React, { useState, useEffect } from 'react';
import './post.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const { id } = props;
  const [ data, setData ] = useState({});

  const fetchData = async () => {
    const response = await Fetch(`/posts/${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { console.log('now', props); fetchData(); }, {});

  return (
    <div className="post">
      Post {id} Detail
      <div className="post__item"> 
        <p>ID: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
      </div>
    </div>
  );
}

export default Post;