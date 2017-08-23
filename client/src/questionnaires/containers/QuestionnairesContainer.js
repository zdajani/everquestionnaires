import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchQuestionnaires } from '../actions';
import QuestionnairesList from '../components/QuestionnairesList'
import Loading from '../../commonComponents/Loading'

//export class so that it can be imported alone for testing 
export class QuestionnairesContainer extends Component {
  componentDidMount(){
    this.props.fetchQuestionnaires();
  }
  // note: fix this to deal with when there is no questionnaires and is not loading
  render() {
    return (
      <div>
        { (this.props.isLoading || !this.props.questionnaires) ? 
          <Loading /> : 
          <QuestionnairesList questionnaires={this.props.questionnaires} /> }
      </div>
    );
  }
}

QuestionnairesContainer.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
};


function mapStateToProps(state) {
  return { questionnaires: state.questionnaires.data, isLoading: state.questionnaires.isLoading };
}

export default connect(mapStateToProps, { fetchQuestionnaires })(QuestionnairesContainer);