import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from "../../actions";
import PropTypes from 'prop-types';

class UsersList extends Component {
  getUsersList() {
    const { users = [] } = this.props;

    return users.map(user =>
      <li className="list-group-item" key={user.id}>{user.name}</li>
    );
  }

  render() {

    return (
      <section className="users-list">
        <h3>Here are a list of users:</h3>
        <ul className="list-group">{this.getUsersList()}</ul>
      </section>
    );
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps)(UsersList)
};
