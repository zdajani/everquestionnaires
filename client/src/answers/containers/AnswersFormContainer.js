import React, {useEffect, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {createAnswers} from '../actions'
import {fetchQuestionnaire} from '../../questionnaire/actions'

import AnswersForm from '../components/AnswersForm'
import Loading from '../../shared_components/Loading'

export const AnswersFormContainer = props => {
  const {id} = useParams()

  useEffect(() => {
    props.fetchQuestionnaire(id)
  }, [])

  const handleFormSubmit = values => props.createAnswers(values, props.questionnaire.id)

  if (props.isLoading || !props.questionnaire)
    return <Loading />
  else
    return <AnswersForm onSubmit={handleFormSubmit} questionnaire={props.questionnaire} />
}

AnswersFormContainer.propTypes = {
  questionnaire: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    questions: PropTypes.object
  }),
  createAnswers: PropTypes.func
}

const mapStateToProps = ({questionnaire}) => ({
  questionnaire: questionnaire.data,
  isLoading: questionnaire.isLoading
})

export default connect(mapStateToProps, {fetchQuestionnaire, createAnswers})(AnswersFormContainer)
