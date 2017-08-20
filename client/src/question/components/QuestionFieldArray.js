import React from 'react';
import { Field } from 'redux-form';
import renderField from '../../commonComponents/Field';

const QuestionFieldArray = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Question</button>
    </li>
    {fields.map((question, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
        />
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
      </li>
    ))}
  </ul>
);


export default QuestionFieldArray;