import React, { useState, useEffect } from 'react';
import './users-detail.scss';
import Fetch from '../../lib/Fetch';

const User = (props) => {
  const { id } = props;
  const [ data, setData ] = useState({});

  const fetchData = async () => {
    const response = await Fetch(`/users/${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="users-detail">
      <div className="users-detail__item">
        <p>Name: {data.name}</p>
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        { data.address &&
          <div className="users-detail__address">
            Address: 
            <p>Street: {data.address.street}</p>
            <p>Suite: {data.address.suite}</p>
            <p>City: {data.address.city}</p>
            <p>Zip: {data.address.zipcode}</p>
          </div>  
        }
        <p>Phone: {data.phone}</p>
        <p>Website: {data.website}</p>
        { data.company &&
          <div className="users-detail__company">
            Company: 
            <p>Name: {data.company.name}</p>
            <p>Catch Phrase: {data.company.catchPhrase}</p>
            <p>Bs: {data.company.bs}</p>
          </div>  
        }
      </div>
    </div>
  );
}

export default User;