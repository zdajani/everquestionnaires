import * as types from './actionTypes';
import _ from 'lodash';
  
const initialState = {
  isLoading: false, 
  data: null,
  errorMessage: null
};

export function fetchAdminQuestionnairesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ADMIN_QUESTIONNAIRES:
      return {
        ...state, 
        isLoading: true
      }
    case types.FETCH_ADMIN_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: _.mapKeys(action.payload, 'id'),
        errorMessage: null
      }
    case types.FETCH_ADMIN_QUESTIONNAIRES_FAILURE:
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
export function fetchAdminQuestionnaireReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ADMIN_QUESTIONNAIRE:
      return {
        ...state, 
        isLoading: true
      }
    case types.FETCH_ADMIN_QUESTIONNAIRE_SUCCESS:
    console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMessage: null
      }
    case types.FETCH_ADMIN_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
    }
};