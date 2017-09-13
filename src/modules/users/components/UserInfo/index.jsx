import React from 'react';

import SimpleText from './../../../../shared/SimpleText';
import Text from './../../../../shared/Text';
import Avatar from './../../../../shared/Avatar';
import Card from './../../../../shared/Card';

import './index.css';

function renderCount() {
  return (
    <div className="UserInfo-list">
      <div className="UserInfo-item">
        <span className="UserInfo-label">2579</span>
        <SimpleText>posts</SimpleText>
      </div>
      <div className="UserInfo-item">
        <span className="UserInfo-label">2.3 m</span>
        <SimpleText>followers</SimpleText>
      </div>
      <div className="UserInfo-item">
        <span className="UserInfo-label">120</span>
        <SimpleText>following</SimpleText>
      </div>
    </div>
  )
}

function UserInfo() {
  return (
    <Card>
      <div className="UserInfo">
        <Avatar
          src="https://avatarfiles.alphacoders.com/846/84606.jpg"
          description="allen4dev avatar"
          width={30}
        />
        <div className="UserInfo-description">
          <div className="UserInfo-name">
            <span className="UserInfo-username">allen4dev</span>
            <span className="UserInfo-fullname">Alan Aliaga</span>
          </div>
          <Text color="text-dark">Description about the user comes here</Text>
          {renderCount()}
        </div>
      </div>
    </Card>
  );
}

export default UserInfo;
