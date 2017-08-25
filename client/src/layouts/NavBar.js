import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../auth/actions';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
   renderLogoutButton() {
     return (
       <button onClick={this.props.logout} className="nav-link logout-button btn btn-link">Logout</button>
     );
   }
   
   renderLoginLink() {
     return (
       <NavLink to="/login" className="nav-link">Login</NavLink>
     );
   }
   
  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="navbar-brand ttile">
          <h1 className="title">everQuestionnaires</h1>
        </div>
        <div className="nav-item">
          <NavLink to="/questionnaires" className="nav-link" activeClassName="active">
            Questionnaires
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/questionnaires/new" className="nav-link" activeClassName="active">
            Create Questionnaire
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/admin" className="nav-link" activeClassName="active">
            Admin Page
          </NavLink>
        </div>
        <div className="nav-item navbar-right">
          {this.props.isAuthenthicated ? this.renderLogoutButton() : this.renderLoginLink()}
        </div>
      </nav>
    </div>
    )
  }
}

export default connect(null, { logout })(NavBar);
