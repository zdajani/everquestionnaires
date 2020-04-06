import React from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'

import AuthFormFields from './AuthFormFields'

import './styles/Auth.css'

export const Login = ({handleSubmit, submitting, errorMessage}) => (
  <div className='container'>
    <div className='login-body'>
      <form className='form-signin' onSubmit={handleSubmit} >
        {
          errorMessage && (
            <div className='alert alert-danger'>
              {errorMessage}
            </div>
          )
        }
        <h3 className='form-signin-heading'>Please Login</h3>
        <AuthFormFields />
        <button
          type='submit'
          className='btn btn-lg btn-success btn-block'
          disabled={submitting}>
            Login
        </button>
        <Link to='/signup' className='btn btn-lg btn-primary btn-block'>
            Create Account
        </Link>
      </form>
    </div>
  </div>
)


export default reduxForm({
  form: 'login'
})(Login)