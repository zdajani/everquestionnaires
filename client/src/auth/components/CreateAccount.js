import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createAccount } from '../actions';

class CreateAccount extends Component {
  
  renderField(field)  {
    const className = 'form-group';
    return (
      <div className= { className }>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
           {...field.input}
        />
      </div>
    );
  }
  
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
          component={ this.renderField }
        />
        <Field 
          label="Password:"
          name="password"
          component={ this.renderField }
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