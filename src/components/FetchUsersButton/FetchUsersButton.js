import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FetchUsersButton extends Component {
  render() {
    return (
      <Link to="/users">
        <button type="button"
                className="btn btn-primary">
          Fetch Users
        </button>
      </Link>
    );
  }
}

FetchUsersButton.propTypes = {};
FetchUsersButton.defaultProps = {};

export default FetchUsersButton;