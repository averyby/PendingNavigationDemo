import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FetchUsersButton extends Component {
  render() {
    return (
      <button type="button"
              className="btn btn-primary">
        Fetch Users
      </button>
    );
  }
}

FetchUsersButton.propTypes = {};
FetchUsersButton.defaultProps = {};

export default FetchUsersButton;