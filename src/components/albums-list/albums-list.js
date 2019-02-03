import React, { useState, useEffect } from 'react';
import './albums-list.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const Albums = (props) => {
  const { id } = props;
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/albums?userId=${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="albums-list">
      Albums
      {data.map((item) => (
        <Link to={`/photos-list/${item.id}`} key={item.id}>
          <div className="albums-list__item">
            <span>{item.title || '-'}</span>
          </div>
        </Link>))
      }
    </div>
  );
}

export default Albums;