import React from 'react';

import CommentList from './../../../comments/components/CommentList';

import Avatar from './../../../../shared/Avatar';
import Text from './../../../../shared/Text';
import Title from './../../../../shared/Title';
import Form from './../../../../shared/Form';

import './index.css';

function PhotoDescription() {
  return (
    <div className="PhotoDescription">
      <div className="PhotoDescription-header">
        <Avatar
          src="https://avatarfiles.alphacoders.com/846/84606.jpg"
          description="Alan Aliaga"
          width={20}
        />
        <div className="PhotoDescription-user">
          <span className="PhotoDescription-fullname">Alan Aliaga</span>
          <span className="PhotoDescription-time">12:30</span>
        </div>
      </div>

      <Text>
        Illidan Tempestira is my favorite character in the World of Warcraft
        Universe
      </Text>

      <Title>Comments</Title>
      <div className="PhotoDescription-comments">
        <CommentList />
      </div>

      <Form />
    </div>
  );
}

export default PhotoDescription;
