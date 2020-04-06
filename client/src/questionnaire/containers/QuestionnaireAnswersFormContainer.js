import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {fetchQuestionnaire} from '../actions'

import Loading from '../../shared_components/Loading'
import AnswersFormContainer from '../../answers/containers/AnswersFormContainer'

const QuestionnaireAnswersFormContainer = props => {
  const {id} = useParams()

  useEffect(() => {
    props.fetchQuestionnaire(id)
  }, [])

  if (props.isLoading || !props.questionnaire)
    return <Loading />
  else
    return <AnswersFormContainer questionnaire={props.questionnaire} />
}

QuestionnaireAnswersFormContainer.propTypes = {
  fetchQuestionnaire: PropTypes.func,
  isLoading: PropTypes.bool,
  questionnaire: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.object
  })
}

const mapStateToProps = ({questionnaire}) => ({
  questionnaire: questionnaire.data,
  isLoading: questionnaire.isLoading
})

export default connect(mapStateToProps, {fetchQuestionnaire})(QuestionnaireAnswersFormContainer)