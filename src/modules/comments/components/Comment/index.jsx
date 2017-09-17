import React from 'react';
import { string } from 'prop-types';

import Avatar from './../../../../shared/Avatar';
import Text from './../../../../shared/Text';

import './index.css';

function Comment(props) {
  return (
    <div className="Comment">
      <Avatar src={props.avatar} description={props.displayName} width={15} />
      <div className="Comment-description">
        <span className="Comment-fullname">
          {props.displayName}
        </span>
        <Text>
          {props.description}
        </Text>
      </div>
    </div>
  );
}

Comment.propTypes = {
  avatar: string.isRequired,
  displayName: string.isRequired,
  description: string.isRequired,
};

export default Comment;
