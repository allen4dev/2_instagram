import React, {Component} from 'react';
import PrivateRoute from './../../PrivateRoute';

import UserInfo from './../../modules/users/components/UserInfo';
import PhotoList from './../../modules/photos/components/PhotoList';

import AddButton from './../../shared/Button';
import AddPopup from './../../shared/AddPopup';
import Overlay from './../../shared/Overlay';

import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.setOverlay = this.setOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);

    this.state = {
      overlay: false,
    }
  }

  setOverlay() {
    this.setState({ overlay: true });
  }

  closeOverlay() {
    this.setState({ overlay: false });
  }

  render() {
    return (
      <section className="Home container">
        {/* Replace hardcoded authed by the redux store authed */}
        {this.state.overlay && (
          <Overlay />
        )}
        <PrivateRoute
          path="/add"
          authed
          component={AddPopup}
          handleClose={this.closeOverlay}
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

export default Home;
