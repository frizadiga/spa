import React, { useState, useEffect } from 'react';
import './users.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const Users = () => {
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch('/users')
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="users">
      Users List
      {data.map((item) => (
        <Link to={`users/${item.id}`}>
          <div className="users__item" key={item.id}> 
            <span>{item.id || '-'}</span>
            <span>{item.name || '-'}</span>
          </div>
        </Link>))
      }
    </div>
  );
}

export default Users;