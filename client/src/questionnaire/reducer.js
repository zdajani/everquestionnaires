import _ from 'lodash';
import * as types from './actionTypes';
  
const initialState = {
  isLoading: false, 
  data: null,
  errorMessage: null
};

export function fetchQuestionnaireReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_QUESTIONNAIRE:
      return {
        ...state, 
        isLoading: true
      }
    case types.FETCH_QUESTIONNAIRE_SUCCESS:
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
    case types.FETCH_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
    }
};

// todo: split up the two reducers
export function createQuestionnaireReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_QUESTIONNAIRE:
      return {
        ...state, 
        isLoading: true
      }
    case types.CREATE_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      }
    case types.CREATE_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
    }
};