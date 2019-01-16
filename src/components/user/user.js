import React, { useState, useEffect } from 'react';
import './user.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { id } = props;
  const [ data, setData ] = useState({});

  const fetchData = async () => {
    const response = await Fetch(`/users/${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { console.log('now', props); fetchData(); }, {});

  return (
    <div className="user">
      User {id} Detail
      <div className="user__item"> 
        <p>ID: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        <p>Address: {JSON.stringify(data.address)}</p>
        <p>Phone: {data.phone}</p>
        <p>Website: {data.website}</p>
        <p>Company: {JSON.stringify(data.company)}</p>
      </div>
    </div>
  );
}

export default User;