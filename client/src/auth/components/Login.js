import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
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