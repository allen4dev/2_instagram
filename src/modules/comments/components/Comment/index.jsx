import React from 'react';

import Avatar from './../../../../shared/Avatar';
import Text from './../../../../shared/Text';

import './index.css';

function Comment() {
  return (
    <div className="Comment">
      <Avatar
        src="https://avatarfiles.alphacoders.com/584/thumb-58402.png"
        description="Avatar from some user"
        width={15}
      />
      <div className="Comment-description">
        <span className="Comment-fullname">Some name</span>
        <Text>Put the comment text here if the comment is too big maybe can truncate the big string.</Text>
      </div>
    </div>
  )
}

export default Comment;
