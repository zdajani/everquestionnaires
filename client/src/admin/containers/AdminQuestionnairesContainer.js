import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAdminQuestionnaires} from '../actions'
import Loading from '../../shared_components/Loading'
import AdminQuestionnairesHeader from '../components/AdminQuestionnairesHeader'
import QuestionnairesList from '../../questionnaires/components/QuestionnairesList'


export const AdminQuestionnairesContainer = props => {
  useEffect(() => {
    props.fetchAdminQuestionnaires()
  }, [])

  if (props.isLoading) {
    return <Loading />
  } else {
    return (
      <>
        <AdminQuestionnairesHeader />
        <QuestionnairesList
          questionnaires={props.questionnaires}
          url={props.match.url}
          isAdminPage
        />
      </>
    )
  }
}

AdminQuestionnairesContainer.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
}

const mapStateToProps = ({adminQuestionnaires}) => ({
  questionnaires: adminQuestionnaires.data,
  isLoading: adminQuestionnaires.isLoading
})

export default connect(mapStateToProps,
  {fetchAdminQuestionnaires}
)(AdminQuestionnairesContainer)