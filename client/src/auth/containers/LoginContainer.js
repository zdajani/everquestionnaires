import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions';
import Login from '../components/Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  componentDidMount() {
    if (this.props.isAuthenthicated) {
      this.props.history.push("/questionnaires")
    }
  }
  
  handleFormSubmit(values) {
    const isLogin = true;
    this.props.authenticateUser(values, isLogin);
  }

  render() {
    return (
      <div>
        <Login onSubmit={ this.handleFormSubmit } errorMessage={this.props.errorMessage}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.auth.errorMessage,  
    isAuthenthicated: state.auth.currentUser 
  };
}

export default connect(mapStateToProps, { authenticateUser })(LoginContainer);
