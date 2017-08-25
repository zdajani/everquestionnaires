import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createAccount } from '../actions';
import renderField from '../../commonComponents/Field';
import './styles/Login.css';

class CreateAccount extends Component {
  handleFormSubmit(values) {
    this.props.createAccount({username: values.username, password: values.password})
  };
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className="container">
      <div className="login-body">
        <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h3 className="form-signin-heading">Enter Username and Password</h3>
          <Field 
            label="Username:"
            name="username"
            component={ renderField }
          />
          <Field 
            label="Password:"
            name="password"
            type="password"
            component={ renderField }
          />
          <button 
            type="submit" 
            className="btn btn-lg btn-success btn-block">
            Create Account
          </button>    
        </form>
      </div>
    </div>
    );
  }
}


export default reduxForm({
  form: 'createAccount'
})(
  connect(null, { createAccount })(CreateAccount)
);