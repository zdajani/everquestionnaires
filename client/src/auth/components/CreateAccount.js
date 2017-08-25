import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createAccount } from '../actions';
import renderField from '../../commonComponents/Field';

class CreateAccount extends Component {
  handleFormSubmit(values) {
    this.props.createAccount({username: values.username, password: values.password})
  };
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field 
          label="Username:"
          name="username"
          component={ renderField }
        />
        <Field 
          label="Password:"
          name="password"
          component={ renderField }
        />
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'createAccount'
})(
  connect(null, { createAccount })(CreateAccount)
);