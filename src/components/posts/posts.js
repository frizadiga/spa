import React, { useState, useEffect } from 'react';
import './posts.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const Posts = (props) => {
  const { id } = props;
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/posts?userId=${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="posts">
      Posts List
      {data.map((item) => (
        <Link to={`/posts/${item.id}`}>
          <div className="posts__item" key={item.id}> 
            <span>{item.id || '-'}</span>
            <span>{item.title || '-'}</span>
          </div>
        </Link>))
      }
    </div>
  );
}

export default Posts;