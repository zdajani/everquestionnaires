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

  return (
    <div>
      { (props.isLoading || !props.questionnaire) ?
        <Loading /> :
        <AnswersFormContainer questionnaire={props.questionnaire} />
      }
    </div>
  )
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

function mapStateToProps(state) {
  return {questionnaire: state.questionnaire.data, isLoading: state.questionnaire.isLoading}
}

export default connect(mapStateToProps, {fetchQuestionnaire})(QuestionnaireAnswersFormContainer)