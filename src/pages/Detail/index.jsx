import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import Photo from './../../modules/photos/components/Photo';
import PhotoDescription from './../../modules/photos/components/PhotoDescription';

import './index.css';

import photos from './../../modules/photos';

/* eslint-disable */
class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  async componentDidMount() {
    const { match, photo, fetchSingle } = this.props;

    if (!photo) {
      await fetchSingle(match.params.uid, match.params.id);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { photo } = this.props;

    return (
      <section className="Detail container">
        <div className="Detail-photo">
          <Photo src={photo.src} description={photo.description} />
        </div>
        <PhotoDescription {...photo} />
      </section>
    );
  }
}

Detail.propTypes = {
  fetchSingle: func.isRequired,
};

function mapStateToProps(state, { match }) {
  return {
    photo: state.photos.entities[match.params.id],
  };
}

export default connect(mapStateToProps, photos.actions)(Detail);
