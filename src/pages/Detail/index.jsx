import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import Photo from './../../modules/photos/components/Photo';
import PhotoDescription from './../../modules/photos/components/PhotoDescription';

import './index.css';

import photos from './../../modules/photos';
import comments from './../../modules/comments';

import { getCurrentUser } from './../../helpers/auth';
import { database } from './../../config/firebase';

/* eslint-disable */
class Detail extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);

    this.state = {
      value: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match,
      photo,
      photoComments,
      fetchSingle,
      fetchPhotoComments,
      addComment,
      addPhotoComment,
    } = this.props;

    if (!photo) {
      await fetchSingle(match.params.uid, match.params.id);
    }

    if (photoComments.length === 0) {
      const results = await fetchPhotoComments(match.params.id);

      database
        .ref('comments')
        .child(match.params.id)
        .on('child_added', snapshot => {
          if (results.includes(snapshot.val().id)) {
            return;
          }

          addComment(snapshot.val());
          addPhotoComment(match.params.id, snapshot.val().id);
        });
    }

    this.setState({ loading: false });
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({ value });
  }

  async addComment(e) {
    e.preventDefault();
    const { postComment, match } = this.props;

    const user = getCurrentUser();

    const comment = {
      body: this.state.value,
      uid: user.uid,
      avatar: user.photoURL,
      displayName: user.displayName,
    };

    await postComment(match.params.id, comment);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { photo, photoComments } = this.props;

    return (
      <section className="Detail container">
        <div className="Detail-photo">
          <Photo src={photo.src} description={photo.description} />
        </div>
        <PhotoDescription
          {...photo}
          comments={photoComments}
          placeholder="Post comment"
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.addComment}
        />
      </section>
    );
  }
}

Detail.propTypes = {
  fetchSingle: func.isRequired,
};

function mapStateToProps(state, { match }) {
  const commentIds = state.photos.comments[match.params.id] || [];

  return {
    photoComments: commentIds.map(id => state.comments.entities[id]),
    photo: state.photos.entities[match.params.id],
  };
}

export default connect(mapStateToProps, {
  ...photos.actions,
  ...comments.actions,
})(Detail);
