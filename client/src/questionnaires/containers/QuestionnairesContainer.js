import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {fetchQuestionnaires} from '../actions'

import Loading from '../../shared_components/Loading'
import QuestionnairesHeader from '../components/QuestionnairesHeader'
import QuestionnairesList from '../components/QuestionnairesList'

//export class so that it can be imported alone for testing
export const QuestionnairesContainer = props => {
  useEffect(() => {
    props.fetchQuestionnaires()
  }, [])

  if (props.isLoading) {
    return <Loading />
  } else {
    return (
      <>
        <QuestionnairesHeader />
        <QuestionnairesList questionnaires={props.questionnaires} url={props.match.url} />
      </>
    )
  }
}

QuestionnairesContainer.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })),
  match: PropTypes.object
}


const mapStateToProps = ({questionnaires}) => ({
  questionnaires: questionnaires.data,
  isLoading: questionnaires.isLoading
})

export default connect(mapStateToProps, {fetchQuestionnaires})(QuestionnairesContainer)