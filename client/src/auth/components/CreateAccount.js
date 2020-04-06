import React from 'react';
import { reduxForm } from 'redux-form';
import AuthFormFields from './AuthFormFields';
import './styles/Auth.css';

export const CreateAccount = props => { 
  const { handleSubmit, submitting, errorMessage } = props
  return (
    <div className="container">
      <div className="login-body">
        <form className="form-signin" onSubmit={handleSubmit} >
          { errorMessage &&
            <div className="alert alert-danger">
              {errorMessage}
            </div>
          }
          <h3 className="form-signin-heading">Enter Username and Password</h3>
          <AuthFormFields />
          <button 
            type="submit" 
            className="btn btn-lg btn-success btn-block"
            disabled={submitting}>
            Create Account
          </button>    
        </form>
      </div>
    </div>
  );
}

export default reduxForm({
  form: 'createAccount'
})(CreateAccount);