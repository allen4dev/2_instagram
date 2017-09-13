import React from 'react';
import { string } from 'prop-types';

import './index.css';

function Image({ src, description }) {
  return (
    <div className="Wrapper">
      <img src={src} alt={description} className="Image" />
    </div>
  );
}

Image.propTypes = {
  src: string.isRequired,
  description: string.isRequired,
};

export default Image;
