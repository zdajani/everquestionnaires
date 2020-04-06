import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import _ from 'lodash'

import renderField from '../../shared_components/Field'
import Question from '../../question/components/Question'

const AnswersFieldArray = ({fields, questions, meta}) => {
  useEffect(() => {
    _.map(questions, question => fields.push({question_id: question.id}))
  }, [])

  return(
    <>
      <div className='form-group'>
        {
          meta.submitFailed && meta.error && (
            <div className='alert alert-danger'>
              {meta.error}
            </div>
          )
        }
      </div>
      {
        fields.map((answer, index) => (
          <div key={index} className='form-group'>
            <Question
              name={questions[(fields.get(index)).question_id].name}
              label={questions[(fields.get(index)).question_id].label}
            />
            <Field
              name={`${answer}.response`}
              type='text'
              component={renderField}
              isTextArea={true}
            />
          </div>
        ))
      }
    </>
  )
}


AnswersFieldArray.propTypes = {
  questions: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  meta: PropTypes.object,
  fields: PropTypes.object
}

export default AnswersFieldArray