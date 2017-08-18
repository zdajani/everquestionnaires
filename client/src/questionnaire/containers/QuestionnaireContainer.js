import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchQuestionnaire } from '../actions';
import Questionnaire from '../components/Questionnaire'
import Loading from '../../commonComponents/Loading'

export class QuestionnaireContainer extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchQuestionnaire(id);
  }
  //note: fix this to deal with when there is no questions
  render() {
    const {isLoading, questionnaire } = this.props
    return (
      <div>
        { (isLoading || !questionnaire) ? 
          <Loading /> : 
          <Questionnaire 
            title={questionnaire.title} 
            questions={questionnaire.questions} /> }
      </div>
    );
  }
}

QuestionnaireContainer.propTypes = {
  questionnaire: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }))
  })
};


function mapStateToProps(state) {
  return { questionnaire: state.questionnaire.data, isLoading: state.questionnaire.isLoading };
}

export default connect(mapStateToProps, { fetchQuestionnaire })(QuestionnaireContainer);