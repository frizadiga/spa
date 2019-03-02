import React, { useState, useEffect } from 'react';
import { PropTypes as T } from 'prop-types';
import './comments-list.scss';
import Fetch from '../../lib/Fetch';

const CommentsList = (props) => {
  const { id } = props;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/comments?postId=${id}`);
    // console.log(response);
    if (response.status === 200) setData(response.data);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="comments-list">
      {data.map(item => (
        <div className="comments-list__item" key={item.id}>
          <p className="comments-list__name">{item.name || '-'}</p>
          <p>{item.email || '-'}</p>
          <p className="comments-list__body">"{item.body || '-'}"</p>
        </div>
      ))}
    </div>
  );
};

CommentsList.propTypes = {
  id: T.string.isRequired,
};

export default CommentsList;
