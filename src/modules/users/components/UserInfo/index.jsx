import React from 'react';
import { string } from 'prop-types';

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
  );
}

function UserInfo(props) {
  return (
    <Card>
      <div className="UserInfo">
        <Avatar src={props.avatar} description={props.displayName} width={30} />
        <div className="UserInfo-description">
          <div className="UserInfo-name">
            <span className="UserInfo-username"> - </span>
            <span className="UserInfo-fullname">{props.displayName}</span>
          </div>
          <Text color="text-dark">{props.email}</Text>
          {renderCount()}
        </div>
      </div>
    </Card>
  );
}

UserInfo.propTypes = {
  avatar: string.isRequired,
  displayName: string.isRequired,
  email: string.isRequired,
  // uid: string.isRequired,
};

export default UserInfo;
