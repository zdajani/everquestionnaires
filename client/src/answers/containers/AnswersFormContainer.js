import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import AnswersForm from '../components/AnswersForm';
import { createAnswers } from '../actions';

export class AnswersFormContainer extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(values) {
    const id = this.props.questionnaire.id;
    this.props.createAnswers(values, id );
  }
  
  render() {
    return (
      <div>
        <AnswersForm 
          onSubmit={ this.handleFormSubmit } 
          questionnaire={this.props.questionnaire}/>
      </div>
    );
  }
}

AnswersFormContainer.propTypes = {
  questionnaire: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    questions: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }))
  })
};

export default connect(null, { createAnswers })(AnswersFormContainer);
