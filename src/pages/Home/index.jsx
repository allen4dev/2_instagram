import React, { Component } from 'react';
import { shape, func, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import PrivateRoute from './../../PrivateRoute';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import AddButton from './../../shared/Button';
import AddPopup from './../../shared/AddPopup';
import Overlay from './../../shared/Overlay';

import './index.css';

import photos from './../../modules/photos';

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
    const { userPhotos, fetchUserPhotos } = this.props;

    if (userPhotos.length === 0) {
      await fetchUserPhotos();
    }
    this.setState({ loading: false });
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

  async handleAdd(e) {
    e.preventDefault();
    const { photo, description } = this.state;
    const { postPhoto } = this.props;

    await postPhoto(photo, description);

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
  userPhotos: arrayOf(object).isRequired,
  fetchUserPhotos: func.isRequired,
  postPhoto: func.isRequired,

  history: shape({
    push: func,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    userPhotos: Object.values(state.photos.entities),
  };
}

export default connect(mapStateToProps, photos.actions)(Home);
// export default Home;
