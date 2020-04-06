import React from 'react'
import PropTypes from 'prop-types'
import {FieldArray, reduxForm} from 'redux-form'
import {validate} from '../validations'

import AnswersFieldArray from './AnswersFieldArray'

export const AnswersForm = props => {
  const {handleSubmit, submitting, questionnaire} = props
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2 className='card-title' >{questionnaire.title}</h2>
        <FieldArray 
          name='answers' 
          component={AnswersFieldArray} 
          questions={questionnaire.questions}
        />
        <button type='submit' disabled={submitting} className='btn btn-success btn-lg btn-block'>
          Submit
        </button>
      </form>
    </div>
  )
}

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
}

export default reduxForm({
  form: 'AnswerForm',
  validate
})(AnswersForm)