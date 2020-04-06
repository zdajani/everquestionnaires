import React from 'react'
import PropTypes from 'prop-types'

import UserResponseRows from './UserResponseRows'

const AnswersTable = ({questions, usersAnswers}) => (
  <table className='table table-striped table-bordered table-responsive'>
    <thead className='thead-inverse'>
      <tr>
        <th>#</th>
        <th>Username</th>
        {
          questions.map(question => <th key={question.id}>{question.name}</th>)
        }
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <UserResponseRows questions={questions} usersAnswers={usersAnswers} />
    </tbody>
  </table>
)


AnswersTable.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  usersAnswers: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      response: PropTypes.string.isRequired,
      question_id: PropTypes.number.isRequired
    }))
  }))
}

export default AnswersTable