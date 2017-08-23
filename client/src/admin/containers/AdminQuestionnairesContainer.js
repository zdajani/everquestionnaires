import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchAdminQuestionnaires } from '../actions';
import QuestionnairesList from '../../questionnaires/components/QuestionnairesList'
import Loading from '../../commonComponents/Loading'

//export class so that it can be imported alone for testing 
export class AdminQuestionnairesContainer extends Component {
  componentDidMount(){
    this.props.fetchAdminQuestionnaires();
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

AdminQuestionnairesContainer.propTypes = {
  questionnaires: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
};

function mapStateToProps(state) {
  return { questionnaires: state.adminQuestionnaires.data, isLoading: state.adminQuestionnaires.isLoading };
}

export default connect(mapStateToProps, 
  { fetchAdminQuestionnaires }
)(AdminQuestionnairesContainer);