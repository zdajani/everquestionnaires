import React from 'react'
import {Field} from 'redux-form'
import renderField from '../../shared_components/Field'
import './styles/QuestionFieldArray.css'

const QuestionFieldArray = ({fields, meta: {error, submitFailed}}) => (
  <div>
    <div className='form-group'>
      <button type='button' className='btn btn-outline-info btn-lg' onClick={() => fields.push({})}>Add Question</button>
      {submitFailed &&
      error &&
      <span className='p-3 mb-2 bg-white text-danger' >
        {error}
      </span>}
    </div>

    {fields.map((question, index) => (
      <div key={index}>
        <div className='form-group add-question-title'>
          <h4> Question #{index + 1}
            <span className='remove-button'>
              <button type='button'
                title='Remove Question'
                onClick={() => fields.remove(index)}
                className='btn btn-outline-danger'>
                  Remove
              </button>
            </span>
          </h4>
        </div>

        <div className='form-group'>
          <Field
            name={`${question}.name`}
            type='text'
            component={renderField}
            label='Name'
          />
        </div>
        <div className='form-group'>
          <Field
            name={`${question}.label`}
            type='text'
            component={renderField}
            label='Label'
            isTextArea={true}
          />
        </div>
      </div>
    ))}
  </div>
)

export default QuestionFieldArray