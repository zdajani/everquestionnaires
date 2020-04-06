import React from 'react';
import PropTypes from 'prop-types';

const AnswersTable = ({questions, usersAnswers}) => {
  //returns questions
  const renderTableHeaders = () => {
    return questions.map(question => {
      return (
        <th key={question.id}>{question.name}</th>
      )
    })
  }

  const renderRows = () => {
    return usersAnswers.map((userAnswers, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          { renderRow(userAnswers.username, userAnswers.id )}
          { renderAnswers(userAnswers.answers) }
          { renderRow(new Date(userAnswers.date).toDateString()) }
        </tr>
      )
    })
  }

  const renderAnswers = (answers) => {
    return questions.map((question, index) => {
      const answer = answers.find(x => x.question_id === question.id);
      const response = answer ? answer.response : null

      return (
        renderRow(response, index)
      );
    });
  }

  const renderRow =(data, id) => {
    return (
        <td key={id}>{ data }</td>
    )
  }

  return (
    <div>
      <table className="table table-striped table-bordered table-responsive">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>Username</th>
            { renderTableHeaders() }
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

AnswersTable.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired),
  usersAnswers: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      response:PropTypes.string.isRequired,
      question_id: PropTypes.number.isRequired
    }).isRequired).isRequired
  }).isRequired)
};

export default AnswersTable;