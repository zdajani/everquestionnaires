import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';

class LogoutButton extends Component {
  render() {
      return (
        <button  onClick={this.props.logout} className="btn btn-primary">Logout</button>
    );
  }
}

export default connect(null, { logout })(LogoutButton);