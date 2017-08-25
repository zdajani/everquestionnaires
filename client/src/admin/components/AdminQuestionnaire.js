import React from 'react';
import PropTypes from 'prop-types';
import AnswersTable from '../components/AnswersTable'

const AdminQuestionnaire = ({  questionnaire, questions, usersAnswers }) => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">{questionnaire.title}</h1>
      <AnswersTable   
        questions={questions}
        usersAnswers={usersAnswers} />
    </div> 
  );
}

AdminQuestionnaire.propTypes = {
  questionnaire: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
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
  }).isRequired).isRequired
};

export default AdminQuestionnaire;