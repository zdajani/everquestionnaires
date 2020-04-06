import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'


import QuestionnairesReducer from './questionnaires/reducer'

import {
  fetchQuestionnaireReducer,
  createQuestionnaireReducer} from './questionnaire/reducer'

import answersReducer from './answers/reducer'
import authReducer from './auth/reducer'

import {
  fetchAdminQuestionnairesReducer,
  fetchAdminQuestionnaireReducer} from './admin/reducer'

const createRootReducer = history => combineReducers({
  form: formReducer,
  questionnaires: QuestionnairesReducer,
  questionnaire: fetchQuestionnaireReducer,
  createQuestionnaire: createQuestionnaireReducer,
  router: connectRouter(history),
  answers: answersReducer,
  auth: authReducer,
  adminQuestionnaires: fetchAdminQuestionnairesReducer,
  adminQuestionnaire: fetchAdminQuestionnaireReducer
})

export default createRootReducer