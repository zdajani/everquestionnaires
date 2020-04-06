import React from 'react'
import PropTypes from 'prop-types'
import {Field, FieldArray, reduxForm} from 'redux-form'

import renderField from '../../shared_components/Field'
import QuestionFieldArray from '../../question/components/QuestionFieldArray'

import {validate} from '../validations'

export const QuestionnaireForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='container'>
        <h2 className='text-center'>Create Questionnaire</h2>
        <Field
          name='title'
          type='text'
          component={renderField}
          label='Questionnaire Title'
        />
        <FieldArray name='questions' component={QuestionFieldArray} />
        <button type='button' className='btn btn-outline-danger btn-lg btn-block' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        <button className='btn btn-outline-success btn-lg btn-lg btn-block' type='submit' disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

QuestionnaireForm.propTypes = {
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'QuestionnaireForm',
  validate
})(QuestionnaireForm)