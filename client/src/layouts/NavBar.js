import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {logout} from '../auth/actions'

export const NavBar = ({isAuthenticated, logout}) => (
  <div className='container-fluid'>
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-light'>
      {/* <div className='navbar-brand title'>
        <h1 className='title'>everQuestionnaires</h1>
      </div> */}
      <div className='nav-item'>
        <NavLink to='/questionnaires' className='nav-link' activeClassName='active'>
            Questionnaires
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to='/questionnaires/new' className='nav-link' activeClassName='active'>
            Create Questionnaire
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to='/admin' className='nav-link' activeClassName='active'>
            Admin Page
        </NavLink>
      </div>
      <div className='nav-item navbar-right'>
        {
          isAuthenticated ?
            <button onClick={logout} className='nav-link logout-button btn btn-link'>Logout</button> :
            <NavLink to='/login' className='nav-link'>Login</NavLink>}
      </div>
    </nav>
  </div>
)


export default connect(null, {logout})(NavBar)
