import React from 'react';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import './index.css';

function Home() {
  return (
    <section className="Home container">
      <UserInfo />
      <PhotoList />
    </section>
  );
}

export default Home;
