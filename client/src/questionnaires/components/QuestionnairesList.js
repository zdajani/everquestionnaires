import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Questionnaire from './Questionnaire';

const QuestionnairesList = ({ questionnaires }) => (
  <ul>
    { _.map(questionnaires, questionnaire => 
      <Questionnaire
        key={questionnaire.id}
        {...questionnaire}
      />
    )}
  </ul>
);

QuestionnairesList.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default QuestionnairesList;