import React, { Component } from 'react';
import { shape, func, arrayOf, object, string } from 'prop-types';
import { connect } from 'react-redux';
import { database } from './../../config/firebase';

import PrivateRoute from './../../PrivateRoute';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import AddButton from './../../shared/Button';
import AddPopup from './../../shared/AddPopup';
import Overlay from './../../shared/Overlay';

import './index.css';

import { getCurrentUser } from './../../helpers/auth';

import photos from './../../modules/photos';
import users from './../../modules/users';

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
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      currentUser,
      userPhotos,
      addPhoto,
      setCurrentUser,
      addUser,
      addUserPhoto,
      fetchUserPhotos,
    } = this.props;

    const { uid, displayName, email } = getCurrentUser();

    if (!currentUser) {
      setCurrentUser(uid);
      addUser({ uid, displayName, email });
    }

    if (userPhotos.length <= 1) {
      const results = await fetchUserPhotos(uid);

      database
        .ref('photos')
        .child(uid)
        .on('child_added', snapshot => {
          if (results.includes(snapshot.val().id)) {
            return;
          }
          addPhoto(snapshot.val());
          addUserPhoto(uid, snapshot.val().id);
        });
    }
    this.setState({ loading: false });
  }

  // componentWillUnmount() {
  //   database
  //     .ref('photos')
  //     .child(this.props.currentUser)
  //     .off('child_added');
  // }

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

  async handleAdd(e) {
    e.preventDefault();
    const { photo, description } = this.state;
    const { postPhoto, currentUser } = this.props;

    await postPhoto(currentUser, photo, description);

    this.setState({ overlay: false }, () => {
      this.props.history.push('/');
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <section className="Home container">
        {this.state.overlay && <Overlay />}
        <PrivateRoute
          path="/add"
          exact
          authed
          component={AddPopup}
          handleClose={this.closeOverlay}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <UserInfo />
        <PhotoList photos={this.props.userPhotos} />
        <div className="Home-button">
          <AddButton handleClick={this.setOverlay} />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  currentUser: string.isRequired,
  userPhotos: arrayOf(object).isRequired,
  fetchUserPhotos: func.isRequired,
  // postPhoto: func.isRequired,
  addPhoto: func.isRequired,
  addUserPhoto: func.isRequired,
  setCurrentUser: func.isRequired,
  addUser: func.isRequired,

  history: shape({
    push: func,
  }).isRequired,
};

function mapStateToProps(state) {
  const currentUser = state.users.currentUser;
  const photoIds = state.users.photos[currentUser] || [];

  return {
    currentUser,
    userPhotos: photoIds.map(id => state.photos.entities[id]),
  };
}

export default connect(mapStateToProps, {
  ...photos.actions,
  ...users.actions,
})(Home);
// export default Home;
