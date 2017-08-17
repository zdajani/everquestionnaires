import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionnairesReducer from './questionnaires/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  questionnaires: QuestionnairesReducer,
});

export default rootReducer;