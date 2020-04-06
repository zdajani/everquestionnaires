import _ from 'lodash';
import { 
  FETCH_QUESTIONNAIRES, 
  FETCH_QUESTIONNAIRES_SUCCESS, 
  FETCH_QUESTIONNAIRES_FAILURE } from './actionTypes';
  
const initialState = {
  isLoading: false, 
  data: null,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONNAIRES:
      return {
        ...state, 
        isLoading: true
      }
    case FETCH_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: _.mapKeys(action.payload, 'id'),
        errorMessage: null
      }
    case FETCH_QUESTIONNAIRES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
    }
};