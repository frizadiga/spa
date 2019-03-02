import React from 'react';
import { PropTypes as T } from 'prop-types';
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
};

PhotosPage.propTypes = {
  match: T.object.isRequired,
};

export default PhotosPage;
