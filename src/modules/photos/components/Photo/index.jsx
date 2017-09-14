import React from 'react';
import { string } from 'prop-types';

import Image from './../../../../shared/Image';

import './index.css';

function Photo({ src, description }) {
  return (
    <article className="Photo">
      <Image src={src} description={description} />
    </article>
  );
}

Photo.propTypes = {
  src: string.isRequired,
  description: string.isRequired,
};

export default Photo;
