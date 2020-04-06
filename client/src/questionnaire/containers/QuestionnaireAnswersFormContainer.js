import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchQuestionnaire} from '../actions'
import Loading from '../../commonComponents/Loading'
import AnswersFormContainer from '../../answers/containers/AnswersFormContainer'

export class QuestionnaireAnswersFormContainer extends Component {
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchQuestionnaire(id)
  }
  
  render() {
    const {isLoading, questionnaire} = this.props
    return (
      <div>
        { (isLoading || !questionnaire) ? 
          <Loading /> : 
          <AnswersFormContainer questionnaire={questionnaire} />
        }
      </div>
    )
  }
}

QuestionnaireAnswersFormContainer.propTypes = {
  questionnaire: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }))
  })
}

function mapStateToProps(state) {
  return {questionnaire: state.questionnaire.data, isLoading: state.questionnaire.isLoading}
}

export default connect(mapStateToProps, {fetchQuestionnaire})(QuestionnaireAnswersFormContainer)