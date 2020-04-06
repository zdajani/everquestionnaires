import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchQuestionnaires} from '../actions'
import Questionnaires from '../components/Questionnaires'
import Loading from '../../shared_components/Loading'

//export class so that it can be imported alone for testing
export class QuestionnairesContainer extends Component {
  componentDidMount(){
    this.props.fetchQuestionnaires()
  }

  render() {
    return (
      <div>
        { (this.props.isLoading) ?
          <Loading /> :
          <Questionnaires questionnaires={this.props.questionnaires} url={this.props.match.url} />}
      </div>
    )
  }
}

QuestionnairesContainer.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
}


function mapStateToProps(state) {
  return {questionnaires: state.questionnaires.data, isLoading: state.questionnaires.isLoading}
}

export default connect(mapStateToProps, {fetchQuestionnaires})(QuestionnairesContainer)