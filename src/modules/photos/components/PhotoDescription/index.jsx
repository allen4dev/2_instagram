import React from 'react';
import { string } from 'prop-types';

import CommentList from './../../../comments/components/CommentList';

import Avatar from './../../../../shared/Avatar';
import Text from './../../../../shared/Text';
import Title from './../../../../shared/Title';
import Form from './../../../../shared/Form';

import './index.css';

function PhotoDescription(props) {
  return (
    <div className="PhotoDescription">
      <div className="PhotoDescription-header">
        <Avatar src={props.avatar} description={props.displayName} width={20} />
        <div className="PhotoDescription-user">
          <span className="PhotoDescription-fullname">
            {props.displayName}
          </span>
          <span className="PhotoDescription-time">12:30</span>
        </div>
      </div>

      <Text>
        {props.description}
      </Text>

      <Title>Comments</Title>
      <div className="PhotoDescription-comments">
        <CommentList />
      </div>

      <Form />
    </div>
  );
}

PhotoDescription.propTypes = {
  description: string.isRequired,
  avatar: string.isRequired,
  displayName: string.isRequired,
};

export default PhotoDescription;
