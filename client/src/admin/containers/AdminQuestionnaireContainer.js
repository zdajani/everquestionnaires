import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {fetchAdminQuestionnaire} from '../actions'

import Loading from '../../shared_components/Loading'
import AdminQuestionnaire from '../components/AdminQuestionnaire'


export const AdminQuestionnaireContainer = props => {
  const {id} = useParams()

  useEffect(() => {
    props.fetchAdminQuestionnaire(id)
  }, [])

  const {questionnaireData, error} = props
  const data = props.questionnaireData

  if (error) {
    return (
      <Redirect to={{
        pathname: '/admin/questionnaires',
        state: {from: props.location}
      }}
      />
    )
  } else {
    return (
      <div>
        {
          (questionnaireData && questionnaireData.questions) ?
            <AdminQuestionnaire
              questions={data.questions}
              questionnaire={data.questionnaire}
              usersAnswers={data.usersAnswers}
            /> :
            <Loading />
        }
      </div>
    )
  }
}

const mapStateToProps = ({adminQuestionnaire}) => ({
  questionnaireData: adminQuestionnaire.data,
  isLoading: adminQuestionnaire.isLoading,
  error: adminQuestionnaire.errorMessage
})

AdminQuestionnaireContainer.propTypes = {
  questionnaireData: PropTypes.shape({
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
    }).isRequired)
  })
}

export default connect(mapStateToProps,
  {fetchAdminQuestionnaire}
)(AdminQuestionnaireContainer)