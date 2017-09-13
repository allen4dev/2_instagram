import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import './index.css';

function Photo({ src, description }) {
  return (
    <article className="Photo">
      <Link to="/detail/4532" className="Photo-link">
        <Image
          src={src}
          description={description}
        />
      </Link>
    </article>
  )
}

Photo.propTypes = {
  src: string.isRequired,
  description: string.isRequired,
}

export default Photo;
