import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import './styles/Layouts.css';

import NavBar from './NavBar';

import QuestionnairesContainer from '../questionnaires/containers/QuestionnairesContainer';
import QuestionnaireAnswersFormContainer from '../questionnaire/containers/QuestionnaireAnswersFormContainer';
import QuestionnaireFormContainer from '../questionnaire/containers/QuestionnaireFormContainer';

import AdminQuestionnairesContainer from '../admin/containers/AdminQuestionnairesContainer';
import AdminQuestionnaireContainer from '../admin/containers/AdminQuestionnaireContainer';

import Login from '../auth/components/Login';
import CreateAccount from '../auth/components/CreateAccount';
import PrivateRoute from '../auth/components/PrivateRoute';

class PrimaryLayout extends Component {
  
  render() {
    return (
      <div>
        <NavBar isAuthenthicated={this.props.isAuthenthicated}/>
        <div className="page-content">
          <Switch>
            <Route path="/questionnaires" exact component={QuestionnairesContainer} />
            
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={CreateAccount}/>
            
            <PrivateRoute path="/questionnaires/new" component={QuestionnaireFormContainer}/>
            <PrivateRoute path="/questionnaires/:id" component={QuestionnaireAnswersFormContainer}/>
            <Route path="/questionnaires" component={QuestionnairesContainer}/>
            
            <PrivateRoute path="/admin/questionnaires/:id" component={AdminQuestionnaireContainer}/>
            <PrivateRoute path="/admin/questionnaires" component={AdminQuestionnairesContainer}/>
            <Redirect from='/admin' to='/admin/questionnaires'/>
             
            {/* redirect to questionnaires page if route doesn't matach anything  */}
            <Redirect to="/questionnaires" />
          </Switch>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { isAuthenthicated: state.auth.currentUser };
}

export default connect(mapStateToProps, null)(PrimaryLayout);