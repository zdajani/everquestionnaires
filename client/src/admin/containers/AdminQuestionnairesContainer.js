import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchAdminQuestionnaires } from '../actions';
import Loading from '../../commonComponents/Loading'
import Questionnaires from '../../questionnaires/components/Questionnaires'

//export class so that it can be imported alone for testing 
export class AdminQuestionnairesContainer extends Component {
  componentDidMount(){
    this.props.fetchAdminQuestionnaires();
  }
  // note: fix this to deal with when there is no questionnaires and is not loading
  render() {
    return (
      <div>
        { (this.props.isLoading) ? 
          <Loading /> :
             <Questionnaires questionnaires={this.props.questionnaires} url={this.props.match.url} /> }
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