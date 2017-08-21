import axios from 'axios';
import * as types from './actionTypes';

export function createAnswers({answers}) {
  const request = axios({
    method: 'post',
    url: '/api/answers',
    data: { answers },
    headers: {'Authorization': `Bearer ${localStorage.authToken}`}
  });
  
  return (dispatch) => {
    dispatch({ type: types.CREATE_ANSWERS });
    
    return request.then(response => {
      dispatch({ 
        type: types.CREATE_ANSWERS_SUCCESS
      });
    }).catch((error) => {
      dispatch({ type: types.CREATE_ANSWERS_FAILURE, payload: "Bad request"});
    })  
  };
}