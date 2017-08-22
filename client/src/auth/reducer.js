import jwtDecode from 'jwt-decode';

import { 
  LOGIN_REQUEST, 
  AUTH_ERROR, 
  AUTH_SUCCESS, 
  LOGOUT 
} from './actionTypes';

const checkToken = (token) => {
  const jwtDecoded = jwtDecode(token);
  var currentTime = new Date().getTime() / 1000;
  return (
    currentTime > jwtDecoded.exp ? null : jwtDecoded
  );
}

const initialState = (token => ({
  isLoading: false,
  currentUser: token ? checkToken(token) : null,
  errorMessage: null
}))(localStorage.authToken)

export default function(state = initialState, action = {}){
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    case AUTH_SUCCESS:
      return {
        isLoading: false,
        currentUser: action.payload,
        errorMessage: null
      }
    case LOGOUT:
      return {
        isLoading: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
}