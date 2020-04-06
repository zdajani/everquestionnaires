import axios from 'axios'
import * as types from './actionTypes'

export function fetchAdminQuestionnaires() {
  const request = axios({
    method: 'get',
    url: '/api/admin',
    headers: {'Authorization': `Bearer ${localStorage.authToken}`}
  })

  return async dispatch => {
    dispatch({type: types.FETCH_ADMIN_QUESTIONNAIRES})

    try {
      const response = await request
      dispatch({
        type: types.FETCH_ADMIN_QUESTIONNAIRES_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      dispatch({type: types.FETCH_ADMIN_QUESTIONNAIRES_FAILURE, payload: 'Bad request'})
    }
  }
}

export function fetchAdminQuestionnaire(id) {
  const request = axios({
    method: 'get',
    url: `/api/admin/questionnaires/${id}`,
    headers: {'Authorization': `Bearer ${localStorage.authToken}`}
  })

  return dispatch => {
    dispatch({type: types.FETCH_ADMIN_QUESTIONNAIRE})

    return request.then(response => {
      dispatch({
        type: types.FETCH_ADMIN_QUESTIONNAIRE_SUCCESS,
        payload: response.data
      })
    }).catch(error => {
      dispatch({type: types.FETCH_ADMIN_QUESTIONNAIRE_FAILURE, payload: 'Bad request'})
    })
  }
}