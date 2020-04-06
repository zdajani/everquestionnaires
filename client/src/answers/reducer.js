import * as types from './actionTypes';

const initialState = {
  isLoading: false, 
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ANSWERS:
      return {
        ...state, 
        isLoading: true
      }
    case types.CREATE_ANSWERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null
      }
    case types.CREATE_ANSWERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default: 
      return state;
    }
};