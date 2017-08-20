import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import _ from 'lodash';

const QuestionnairesList = ({ questionnaires }) => {
  const renderQuestionnaires = (() =>  {
    return _.map(questionnaires, questionnaire => {
      return (
        <li key={questionnaire.id}>
          <Link to={`questionnaires/${questionnaire.id}`}>
            {questionnaire.title}
          </Link>
        </li>
      )
    });
  })
  
  return (
      <ul>
      { renderQuestionnaires() }
     </ul>    
  );
}

QuestionnairesList.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default QuestionnairesList;