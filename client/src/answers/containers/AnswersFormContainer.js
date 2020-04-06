import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AnswersForm from '../components/AnswersForm'
import {createAnswers} from '../actions'

const AnswersFormContainer = props => {
  const handleFormSubmit = useCallback(values => {
    props.createAnswers(values, props.questionnaire.id)
  }, [props])

  return (
    <AnswersForm
      onSubmit={handleFormSubmit}
      questionnaire={props.questionnaire}
    />
  )
}

AnswersFormContainer.propTypes = {
  questionnaire: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    questions: PropTypes.object
  }),
  createAnswers: PropTypes.func
}

export default connect(null, {createAnswers})(AnswersFormContainer)
