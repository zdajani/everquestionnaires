import React from 'react';
import { Field } from 'redux-form';
import renderField from '../../commonComponents/Field';

const QuestionFieldArray = ({ fields }) => (
  <div>
  <div className="form-group">
    <div className="form-group">
      <button type="button" onClick={() => fields.push({})}>Add Question</button>
    </div>
    {fields.map((question, index) => (
        <div key={index}>
        <h4>Question #{index + 1}</h4>
          <span>
            <button type="button" 
              title="Remove Question" 
              onClick={() => fields.remove(index)}
              className="btn btn-danger">
                Remove
            </button>
          </span>
          <div className="form-group">
            
        
          <h4>Question #{index + 1}</h4>
          <Field
            name={`${question}.name`}
            type="text"
            component={renderField}
            label="Name"
          />
          <Field
            name={`${question}.label`}
            type="text"
            component={renderField}
            label="Label"
          />
          </div>
        </div>  
    ))}
    </div>
  </div>
);

export default QuestionFieldArray;