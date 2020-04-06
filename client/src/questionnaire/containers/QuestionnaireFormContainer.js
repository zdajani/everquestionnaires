import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import QuestionnaireForm from '../components/QuestionnaireForm'

import {createQuestionnaire} from '../actions'

const QuestionnaireFormContainer = props => {
  const handleFormSubmit = useCallback(values => {
    props.createQuestionnaire(values)
  }, [props])

  return <QuestionnaireForm onSubmit={handleFormSubmit} />
}

QuestionnaireFormContainer.propTypes = {
  createQuestionnaire: PropTypes.func
}

export default connect(null, {createQuestionnaire})(QuestionnaireFormContainer)
