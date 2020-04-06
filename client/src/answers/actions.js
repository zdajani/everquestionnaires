import axios from 'axios'
import * as types from './actionTypes'
import {push} from 'connected-react-router'

export function createAnswers({answers}, id) {
  const request = axios({
    method: 'post',
    url: '/api/answers',
    data: {answers, questionnaire_id: id},
    headers: {'Authorization': `Bearer ${localStorage.authToken}`}
  })

  return dispatch => {
    dispatch({type: types.CREATE_ANSWERS})

    return request.then(response => {
      dispatch({
        type: types.CREATE_ANSWERS_SUCCESS
      })
      dispatch(push('/questionnaires'))
    }).catch(error => {
      dispatch({type: types.CREATE_ANSWERS_FAILURE, payload: 'Bad request'})
    })
  }
}