import React, { useState, useEffect } from 'react';
import './photos-detail.scss';
import Fetch from '../../lib/Fetch';

const PhotosDetail = (props) => {
  const { id } = props;
  const [ data, setData ] = useState({});

  const fetchData = async () => {
    const response = await Fetch(`/photos/${id}`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="photos-detail">
      PhotosDetail {id} Detail
      <div className="photos-detail__item">
        <img src={data.thumbnailUrl} alt={data.title}/>
        <p>ID: {data.id}</p>
        <p>Title: {data.title}</p>
      </div>
    </div>
  );
}

export default PhotosDetail;