import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import AdminQuestionnaireContainer from '../admin/containers/AdminQuestionnaireContainer'
import AdminQuestionnairesContainer from '../admin/containers/AdminQuestionnairesContainer'
import CreateAccountContainer from '../auth/containers/CreateAccountContainer'
import LoginContainer from '../auth/containers/LoginContainer'
import NavBar from './NavBar'
import PrivateRoute from '../auth/components/PrivateRoute'
import AnswersFormContainer from '../answers/containers/AnswersFormContainer'
import QuestionnaireFormContainer from '../questionnaire/containers/QuestionnaireFormContainer'
import QuestionnairesContainer from '../questionnaires/containers/QuestionnairesContainer'

import './styles/Layouts.css'


const PrimaryLayout = ({isAuthenticated}) => (
  <>
    <NavBar isAuthenticated={isAuthenticated} />
    <div className='page-content'>
      <Switch>
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={CreateAccountContainer} />

        <PrivateRoute path='/questionnaires/new' component={QuestionnaireFormContainer} />
        <PrivateRoute path='/questionnaires/:id' component={AnswersFormContainer} />
        <Route path='/questionnaires' component={QuestionnairesContainer} />

        <PrivateRoute path='/admin/questionnaires/:id' component={AdminQuestionnaireContainer} />
        <PrivateRoute path='/admin/questionnaires' component={AdminQuestionnairesContainer} />
        <Redirect from='/admin' to='/admin/questionnaires' />

        {/* redirect to questionnaires page if route doesn't match anything  */}
        <Redirect to='/questionnaires' />
      </Switch>
    </div>
  </>
)


const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.currentUser
})

export default connect(mapStateToProps)(PrimaryLayout)