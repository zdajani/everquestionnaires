import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import './styles/Login.css';

class Login extends Component {
  componentDidMount() {
    if (this.props.isAuthenthicated) {
      this.props.history.push("/questionnaires")
    }
  }
  
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
    this.props.loginUser({username: values.username, password: values.password})
  };
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className="container">
        <div className="login-body">
          <form className="form-signin" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <h2 className="form-signin-heading">Please login</h2>
            <Field 
              label="Username:"
              name="username"
              component={ this.renderField }
              id="inputUsername"
            />
            <Field 
              label="Password:"
              name="password"
              component={ this.renderField }
              type="password"
              id="inputPassword"
            />
            <button 
              type="submit" 
              className="btn btn-lg btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isAuthenthicated: state.auth.currentUser };
}

export default reduxForm({
  form: 'login'
})(
  connect(mapStateToProps, { loginUser })(Login)
);