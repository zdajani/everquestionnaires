import axios from 'axios';
import * as types from './actionTypes';

export function fetchQuestionnaires() {
  const request = axios({
      method: 'get',
      url: 'api/questionnaires'
  });

  return (dispatch) => {
    dispatch({ type: types.FETCH_QUESTIONNAIRES });
    
    return request.then(response => {
      console.log(response)
      dispatch({ 
        type: types.FETCH_QUESTIONNAIRES_SUCCESS, 
        payload: response.data
      });
    }).catch((error) => {
      dispatch({ type: types.FETCH_QUESTIONNAIRES_FAILURE, payload: "Bad request"});
    })  
  };
}