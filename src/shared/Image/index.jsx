import React from 'react';

import src from './allen_walker.jpg';

function Image() {
  return (
    <div className="Wrapper">
      <img src={src} alt="allen walker from D.Gray-man" className="Image" />
    </div>
  );
}

export default Image;
