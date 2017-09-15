import React, {Component} from 'react';
import { shape, func } from 'prop-types';

import PrivateRoute from './../../PrivateRoute';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import AddButton from './../../shared/Button';
import AddPopup from './../../shared/AddPopup';
import Overlay from './../../shared/Overlay';

import { database } from './../../config/firebase';

import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.setOverlay = this.setOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this.state = {
      overlay: false,
      description: ''
    }
  }

  componentDidMount() {
    database.ref('photos').on('child_added', snapshot => {
      console.log('SNAPSHOT', snapshot.val())
    })
  }

  setOverlay() {
    this.setState({ overlay: true });
  }

  closeOverlay() {
    this.setState({ overlay: false });
  }

  handleAdd(e) {
    e.preventDefault();
    const photosRef = database.ref('photos');
    const newPicture = photosRef.push();

    newPicture.set({ description: this.state.description }).then(() => {
      this.setState({ overlay: false })
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <section className="Home container">
        {this.state.overlay && (
          <Overlay />
        )}
        <PrivateRoute
          path="/add"
          authed
          component={AddPopup}
          handleClose={this.closeOverlay}
          handleAdd={this.handleAdd}
        />
        <UserInfo />
        <PhotoList />
        <div className="Home-button">
          <AddButton
            handleClick={this.setOverlay}
          />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  history: shape({
    push: func
  }).isRequired,
}

export default Home;
