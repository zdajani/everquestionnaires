import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Link } from 'react-router-dom';
import renderField from '../../commonComponents/Field';
import './styles/Login.css';

class Login extends Component {
  componentDidMount() {
    if (this.props.isAuthenthicated) {
      this.props.history.push("/questionnaires")
    }
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
              Login
            </button>
            <Link to='/signup' className="btn btn-lg btn-primary btn-block">
              Create Account
            </Link>          
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