import React from 'react';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import './index.css';

function Home() {
  return (
    <div className="Home container">
      <UserInfo />
      <PhotoList />
    </div>
  );
}

export default Home;
