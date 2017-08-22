import React, { Component } from 'react';
//todo add proptype
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAdminQuestionnaire } from '../actions';
// import Loading from '../../commonComponents/Loading';
// import Table from '../../commonComponents/Table';

export class AdminQuestionnaireContainer extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchAdminQuestionnaire(id);
  }
  
  render() {
    const {isLoading, questionnaire } = this.props
    return (
      <div>
        {/* <Table/> */}
        {/* { (isLoading || !questionnaire) ? 
          <Loading /> : 
          <AnswersFormContainer questionnaire={questionnaire} />
        } */}
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state.adminQuestionnaire)
  return { 
    questionnaire: state.adminQuestionnaire.data, 
    isLoading: state.adminQuestionnaire.isLoading };
}

export default connect(mapStateToProps, 
  { fetchAdminQuestionnaire }
)(AdminQuestionnaireContainer);