import axios from 'axios';
import * as types from './actionTypes';

export function fetchQuestionnaire(id) {
  const request = axios({
      method: 'get',
      url: `/api/questionnaires/${id}`
  });

  return (dispatch) => {
    dispatch({ type: types.FETCH_QUESTIONNAIRE });
    return request.then(response => {
      dispatch({ 
        type: types.FETCH_QUESTIONNAIRE_SUCCESS, 
        payload: response.data
      });
    }).catch((error) => {
      dispatch({ type: types.FETCH_QUESTIONNAIRE_FAILURE, payload: "Bad request"});
    })  
  };
}

export function createQuestionnaire({title, questions}) {
  const request = axios({
    method: 'post',
    url: 'api/questionnaires',
    data: { questionnaire: { title, questions_attributes: questions }},
    headers: {'Authorization': `Bearer ${localStorage.authToken}`}
  });
  
  return (dispatch) => {
    dispatch({ type: types.CREATE_QUESTIONNAIRE });
    
    return request.then(response => {
      dispatch({ 
        type: types.CREATE_QUESTIONNAIRE_SUCCESS
      });
    }).catch((error) => {
      dispatch({ type: types.CREATE_QUESTIONNAIRE_FAILURE, payload: "Bad request"});
    })  
  };
}