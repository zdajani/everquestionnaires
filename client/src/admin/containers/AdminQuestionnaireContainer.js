import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAdminQuestionnaire } from '../actions';
import Loading from '../../commonComponents/Loading';
import AdminQuestionnaire from '../components/AdminQuestionnaire'
import { Redirect } from 'react-router-dom';

export class AdminQuestionnaireContainer extends Component {
  componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchAdminQuestionnaire(id);
  }
  
  render() {
    const { questionnaireData , error} = this.props
    const data = this.props.questionnaireData
    if (error) {
      return (
        <Redirect to={{
          pathname: '/admin/questionnaires', 
          state: {from: this.props.location}
        }}/>
      )
    }
    
    return (
      <div>
        { (questionnaireData && questionnaireData.questions) ? 
          <AdminQuestionnaire 
              questions={data.questions} 
              questionnaire={data.questionnaire}
              usersAnswers={data.usersAnswers}/>  : 
          <Loading />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    questionnaireData: state.adminQuestionnaire.data,
    isLoading: state.adminQuestionnaire.isLoading,
    error: state.adminQuestionnaire.errorMessage };
}

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
};

export default connect(mapStateToProps, 
  { fetchAdminQuestionnaire }
)(AdminQuestionnaireContainer);