import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionnaireForm from '../components/QuestionnaireForm';
import { createQuestionnaire } from '../actions';

export class QuestionnaireFormContainer extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(values) {
    this.props.createQuestionnaire(values);
  }

  render() {
    return (
      <div>
        <QuestionnaireForm onSubmit={ this.handleFormSubmit }/>
      </div>
    );
  }
}

export default connect(null, { createQuestionnaire })(QuestionnaireFormContainer);
