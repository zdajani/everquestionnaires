import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray, reduxForm } from 'redux-form';
import { validate } from '../validations';

import AnswersFieldArray from './AnswersFieldArray';

export const AnswersForm = props => {
  const { handleSubmit, submitting, questionnaire } = props
  return (
    <form onSubmit={handleSubmit}>
      <label>{questionnaire.title}</label>
      <FieldArray 
        name="answers" 
        component={AnswersFieldArray} 
        questions={questionnaire.questions} />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
};

AnswersForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
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

export default reduxForm({
  form: 'AnswerForm',
  validate
})(AnswersForm);