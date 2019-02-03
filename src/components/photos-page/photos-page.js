import React from 'react';
import './photos-page.scss';
import PhotosList from '../photos-list';

const PhotosPage = (props) => {
  const { match } = props;
  return (
    <div className="photos-page">
      PhotosPage
      <PhotosList id={match.params.id} />
    </div>
  );
}

export default PhotosPage;