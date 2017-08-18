import _ from 'lodash';
import { 
  FETCH_QUESTIONNAIRE, 
  FETCH_QUESTIONNAIRE_SUCCESS, 
  FETCH_QUESTIONNAIRE_FAILURE } from './actionTypes';
  
const initialState = {
  isLoading: false, 
  data: null,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONNAIRE:
      return {
        ...state, 
        isLoading: true
      }
    case FETCH_QUESTIONNAIRE_SUCCESS:
      const questionnaire = () => (
         action.payload.questions ? {
           ...action.payload, 
           questions: _.mapKeys(action.payload.questions, 'id')
         } : action.payload
       )
      
      return {
        ...state,
        isLoading: false,
        data: questionnaire(),
        errorMessage: null
      }
    case FETCH_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
    }
};