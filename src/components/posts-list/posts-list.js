import React, { useState, useEffect } from 'react';
import { PropTypes as T } from 'prop-types';
import './posts-list.scss';
import { Link } from 'react-router-dom';
import Fetch from '../../lib/Fetch';

const PostsList = (props) => {
  const { id } = props;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/posts?userId=${id}`);
    // console.log(response);
    if (response.status === 200) setData(response.data);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="posts-list">
      Posts
      {data.map(item => (
        <Link to={`/posts/${item.id}`} key={item.id}>
          <div className="posts-list__item">
            <span className="posts-list__title">{item.title || '-'}</span>
          </div>
        </Link>
      ))
      }
    </div>
  );
};

PostsList.propTypes = {
  id: T.string.isRequired,
};

export default PostsList;
