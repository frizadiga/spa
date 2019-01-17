import React, { useState, useEffect } from 'react';
import './comments-list.scss';
import Fetch from '../../lib/Fetch';

const CommentsList = (props) => {
  const { id } = props;
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/comments?postId=${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="comments-list">
      {data.map((item) => (
        <div className="comments-list__item" key={item.id}>
          <p>
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