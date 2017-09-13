import React from 'react';

import SimpleText from './../../../../shared/SimpleText';
import Text from './../../../../shared/Text';

import './index.css';

function renderCount() {
  return <p>here comes the count</p>;
}

function UserInfo() {
  return (
    <div className="UserInfo">
      <SimpleText color="pink">allen4dev</SimpleText>
      <Text color="blue">Description about the user comes here</Text>
      {renderCount()}
    </div>
  );
}

export default UserInfo;
