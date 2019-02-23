import React, { useState, useEffect } from 'react';
import './users-list.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch('/users')
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData(); }, []);

  const getInitialName = (name) => {
    const nameSplit = name.split(' ');
    const result = nameSplit.map(item => item[0].toUpperCase()).join('');

    return result;
  }

  return (
    <div className="users-list">
      <h2 className="users-list__title">Users</h2>
      {data.map((item) => (
        <Link to={`users/${item.id}`} key={item.id}>
          <div className="users-list__item">
            <img
              src={`https://via.placeholder.com/50?text=${getInitialName(item.name)}`}
              alt={`${item.name}`}
            />
            <span>{item.name || '-'}</span>
          </div>
        </Link>))
      }
    </div>
  );
}

export default UsersList;