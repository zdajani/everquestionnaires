import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import QuestionnairesList from '../components/QuestionnairesList'
import './styles/Questionnaires.css' 

const Questionnaires = ({questionnaires, url}) => {
  const isAdminPage = url.includes('admin')
  return (
    <div>
      <section className='jumbotron text-center'>
        <div className='container'>
          <h1 className='jumbotron-heading page-title'>{isAdminPage ? 'Admin Page' : 'everQuestionnaires'}</h1>
          <p className='lead text-muted'>
            Here for your questionnaire needs anytime anywhere
          </p>
          <div className='top-buttons'>
            <Link to='/questionnaires/new' className='btn btn-outline-info'>
              <h4>Create A Questionnaire</h4>
            </Link>
          </div>
          { !isAdminPage &&
          <div className='top-buttons'>
            <Link to='/admin/questionnaires' className='btn btn-outline-info'>
              <h4>View Answers To Your Questionnaires</h4>
            </Link>
          </div> }
        </div>
      </section>
      {questionnaires && <QuestionnairesList questionnaires={questionnaires} url={url} isAdminPage={isAdminPage} />}
    </div>
  )
}

Questionnaires.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired),
  url: PropTypes.string
}

export default Questionnaires