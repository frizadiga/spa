import React from 'react';
import './photos-detail-page.scss';
import PhotosDetail from '../photos-detail';

const PhotosDetailPages = (props) => {
  const { match } = props;
  return (
    <div className="photos-detail-page">
      PhotosDetailPages
      <PhotosDetail id={match.params.id} />
    </div>
  );
}

export default PhotosDetailPages;