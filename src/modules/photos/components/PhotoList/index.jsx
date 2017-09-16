import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Link } from 'react-router-dom';

import Photo from './../Photo';

import Card from './../../../../shared/Card';

import './index.css';

function PhotoList({ photos }) {
  return (
    <div className="PhotoList">
      {photos.map(photo =>
        <Card key={photo.id}>
          <Link to={`/detail/${photo.uid}/${photo.id}`}>
            <Photo {...photo} />
          </Link>
        </Card>,
      )}
    </div>
  );
}

PhotoList.propTypes = {
  photos: arrayOf(object).isRequired,
};

export default PhotoList;
