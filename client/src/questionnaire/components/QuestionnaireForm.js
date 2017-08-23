import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { validate } from '../validations';
import renderField from '../../commonComponents/Field';
import QuestionFieldArray from '../../question/components/QuestionFieldArray';

export const QuestionnaireForm = props => {  
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="container">
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Questionnaire Title"
      />
      <FieldArray name="questions" component={QuestionFieldArray} />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};


QuestionnaireForm.propTypes = {
  pristine: PropTypes.bool,
	handleSubmit: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'QuestionnaireForm',
  validate
})(QuestionnaireForm);