import React from 'react';

import Photo from './../../modules/photos/components/Photo';
import PhotoDescription from './../../modules/photos/components/PhotoDescription';

import './index.css';

/* eslint-disable */
function Detail() {
  return (
    <section className="Detail container">
      <div className="Detail-photo">
        <Photo
          src="https://pbs.twimg.com/profile_images/620543983354310656/OYnm39rN.jpg"
          description="Illitan Tempestira Comic"  
        />
      </div>
      <PhotoDescription />
    </section>
  ) 
}

export default Detail;
