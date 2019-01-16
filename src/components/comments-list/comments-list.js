import React, { useState, useEffect } from 'react';
import './comments-list.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {
  const { id } = props;
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/posts/${id}/comments?_limit=5`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="comments-list">
      {data.map((item) => (
        <div className="comments-list__item"> 
          <p>
            <span>{item.id || '-'}</span>
            {' - '}
            <span>{item.name || '-'}</span>
          </p>
          <p>{item.email || '-'}</p>
          <p>{item.body || '-'}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;