import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import './styles/questionnairesList.css'

const QuestionnairesList = ({questionnaires, url, isAdminPage}) => {
  if (questionnaires) {
    return (
      <div className='album text-muted'>
        <div className='container'>
          <div className='row questionnaires'>
            {
              _.map(questionnaires, questionnaire => (
                <div key={questionnaire.id} className='card'>
                  <Link to={`${url}/${questionnaire.id}`}>
                    <h4 className='card-title'> {questionnaire.title} Questionnaire</h4>
                  </Link>
                  <div className='questionnaires-list-buttons'>
                    <Link to={`${url}/${questionnaire.id}`} className='btn btn-info btn-lg'>
                      { isAdminPage ? 'View Responses' : 'Take Questionnaire'}
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}



QuestionnairesList.propTypes = {
  isAdminPage: PropTypes.bool,
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.questions
  })),
  url: PropTypes.string.isRequired
}

export default QuestionnairesList