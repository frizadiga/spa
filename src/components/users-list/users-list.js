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

  useEffect(() => { fetchData() }, []);

  return (
    <div className="users-list">
      Users List
      {data.map((item) => (
        <Link to={`users/${item.id}`} key={item.id}>
          <div className="users-list__item"> 
            <span>{item.name || '-'}</span>
          </div>
        </Link>))
      }
    </div>
  );
}

export default UsersList;