import React from 'react';
import { PropTypes as T } from 'prop-types';
import './photos-detail-page.scss';
import PhotosDetail from '../photos-detail';

const PhotosDetailPages = (props) => {
  const { match } = props;
  return (
    <div className="photos-detail-page">
      <PhotosDetail id={match.params.id} />
    </div>
  );
};

PhotosDetailPages.propTypes = {
  match: T.object.isRequired,
};

export default PhotosDetailPages;
