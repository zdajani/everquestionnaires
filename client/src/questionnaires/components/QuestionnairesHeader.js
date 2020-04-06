import React from 'react'
import {Link} from 'react-router-dom'

const QuestionnairesHeader = () => (
  <section className='jumbotron text-center'>
    <div className='container'>
      <h1 className='jumbotron-heading page-title'>everQuestionnaires</h1>
      <p className='lead text-muted'>
        Here for your questionnaire needs anytime anywhere
      </p>
      <div className='top-buttons'>
        <Link to='/questionnaires/new' className='btn btn-outline-info'>
          <h4>Create A Questionnaire</h4>
        </Link>
      </div>
      <div className='top-buttons'>
        <Link to='/admin/questionnaires' className='btn btn-outline-info'>
          <h4>View Answers To Your Questionnaires</h4>
        </Link>
      </div>
    </div>
  </section>
)

export default QuestionnairesHeader