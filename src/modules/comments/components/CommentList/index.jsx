import React from 'react';
import { arrayOf, object } from 'prop-types';

import Comment from './../Comment';

function CommentList({ comments }) {
  return (
    <div className="CommentList">
      {comments.map(comment => <Comment {...comment} />)}
    </div>
  );
}

CommentList.propTypes = {
  comments: arrayOf(object).isRequired,
};

export default CommentList;
