import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Question from '../../question/components/Question';

//only need access to title for now
const Questionnaire = ({ title, questions }) => (
  <ul>
    {title}
    { _.map(questions, question => 
      <Question
        key={question.id}
        {...question}
      />
    )}
  </ul>
);

Questionnaire.propTypes = {
      title: PropTypes.string.isRequired,
      questions: PropTypes.objectOf(PropTypes.shape({
        id:  PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired).isRequired 
};

export default Questionnaire;