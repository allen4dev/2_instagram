import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import PrivateRoute from './../../PrivateRoute';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import AddButton from './../../shared/Button';
import AddPopup from './../../shared/AddPopup';
import Overlay from './../../shared/Overlay';

import { database, storage } from './../../config/firebase';

import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.setOverlay = this.setOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      overlay: false,
      description: '',
      photo: null,
      photos: [],
    };
  }

  componentDidMount() {
    if (this.state.photos.length === 0) {
      database.ref('photos').on('child_added', snapshot => {
        const photos = [...this.state.photos, snapshot.val()];
        console.log('PHOTOS_ADDED', photos);
        this.setState({ photos });
      });
    }
  }

  componentWillUnmount() {
    database.ref('photos').off('child_added');
  }

  setOverlay() {
    this.setState({ overlay: true });
  }

  closeOverlay() {
    this.setState({ overlay: false });
  }

  handleChange(e) {
    const name = e.target.name;
    let value;

    if (name === 'photo') {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }

    this.setState({ [name]: value });
  }

  handleAdd(e) {
    e.preventDefault();
    const { photo, description } = this.state;

    const storageRef = storage.ref(`photos/${photo.name}`);
    const task = storageRef.put(photo);

    task.on(
      'state_changed',
      snapshot => {
        const percentage =
          snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(percentage);
      },
      error => {
        console.log(error.message);
      },
      () => {
        const photosRef = database.ref('photos');
        const newPicture = photosRef.push();

        const record = {
          id: newPicture.key,
          description,
          src: task.snapshot.downloadURL,
        };

        newPicture.set(record).then(() => {
          this.setState({ overlay: false });
          this.props.history.push('/');
        });
      }
    );
  }

  render() {
    return (
      <section className="Home container">
        {this.state.overlay && <Overlay />}
        <PrivateRoute
          path="/add"
          authed
          component={AddPopup}
          handleClose={this.closeOverlay}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <UserInfo />
        <PhotoList photos={this.state.photos} />
        <div className="Home-button">
          <AddButton handleClick={this.setOverlay} />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default Home;
