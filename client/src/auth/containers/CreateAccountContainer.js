import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions';
import CreateAccount from '../components/CreateAccount';

class CreateAccountContainer extends Component {
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
    const isLogin = false;
    this.props.authenticateUser(values, isLogin);
  }

  render() {
    return (
      <div>
        <CreateAccount onSubmit={ this.handleFormSubmit } errorMessage={this.props.errorMessage}/>
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

export default connect(mapStateToProps, { authenticateUser })(CreateAccountContainer);
