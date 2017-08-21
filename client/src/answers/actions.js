import axios from 'axios';
import * as types from './actionTypes';

export function createAnswers({answers}) {
  const request = axios.post('/api/answers', { 
     answers 
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