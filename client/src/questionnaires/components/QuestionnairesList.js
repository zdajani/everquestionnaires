import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import './styles/Questionnaires.css'; 

const QuestionnairesList = ({ questionnaires, url, isAdminPage }) => {
  const renderViewAnswersButtons = (questionnaire) => (
    <div className="questionnaires-list-buttons">
      <Link to={`${url}/${questionnaire.id}`} className="btn btn-info btn-lg">
        View Responses
      </Link>
    </div>
  )
  
  const renderTakeQuestionnaireButton = (questionnaire) => (
    <div className="questionnaires-list-buttons">
      <Link to={`${url}/${questionnaire.id}`} className="btn btn-info btn-lg">
        Take Questionnaire
      </Link>
    </div>
  )


  
  const renderQuestionnaires = () =>  {
    return _.map(questionnaires, questionnaire => {
      return (
        <div key={questionnaire.id} className="card">
          <Link to={`${url}/${questionnaire.id}`}>
            <h4 className="card-title"> {questionnaire.title} Questionnaire</h4>
          </Link>
            { isAdminPage ? renderViewAnswersButtons(questionnaire) : renderTakeQuestionnaireButton(questionnaire) }
        </div>
      )
    });
  }
  
  return (
    <div className="album text-muted">
        <div className="container">
          <div className="row">
            { renderQuestionnaires() }
          </div>
        </div>
    </div>
  );
}

QuestionnairesList.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  url: PropTypes.string.isRequired
};

export default QuestionnairesList;