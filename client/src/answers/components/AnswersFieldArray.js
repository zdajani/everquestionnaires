import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import _ from 'lodash';
import renderField from '../../commonComponents/Field';
import Question from '../../question/components/Question';

class AnswersFieldArray extends Component {
  constructor(props) {
    super(props)
    _.map(props.questions, question => 
      props.fields.push({question_id: question.id})
    )
    
    this.state = {
      questions: props.questions
    }
  }
  
  render(){
    const fields = this.props.fields;
    const questions = this.state.questions
    return(
      <ul>
        {fields.map((answer, index) => (      
          <li key={index}>
            <Question 
              name={questions[(fields.get(index)).question_id].name} 
              label={questions[(fields.get(index)).question_id].label} />
            <Field
              name={`${answer}.response`}
              type="text"
              component={renderField}
              label="Response"
            />
          </li>
        ))}
      </ul>
    );
  }
}

AnswersFieldArray.propTypes = {
  questions: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default AnswersFieldArray;