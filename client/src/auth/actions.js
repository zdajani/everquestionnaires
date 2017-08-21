import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';

import * as types from './actionTypes'

export function loginUser({ username, password }) {
  return dispatch => {
    dispatch({ type: types.LOGIN_REQUEST });
    
    axios.post('/user_token', {auth: {username, password}})
      .then(res => {
        localStorage.authToken = res.data.jwt
        dispatch({
          type: types.AUTH_SUCCESS,
          payload: jwtDecode(res.data.jwt)
        });
        dispatch(push('/questionnaires'))
      }).catch((error) => {
        dispatch({ type: types.AUTH_ERROR, payload: "Bad login information" });
      })
  }
}

export function createAccount({ username, password }) {
  console.log(username, password)
  return dispatch => {
    dispatch({ type: types.LOGIN_REQUEST });
    
    axios.post('api/users', {user: {username: username, password: password}})
      .then(res => {
        localStorage.authToken = res.data.jwt
        dispatch({
          type: types.AUTH_SUCCESS,
          payload: jwtDecode(res.data.jwt)
        });
        dispatch(push('/questionnaires'))
      }).catch((error) => {
        dispatch({ type: types.AUTH_ERROR, payload: "Bad login information" });
      })
  }
}

export function logout() {
  delete localStorage.authToken
  return dispatch => {
    dispatch({ type: types.LOGOUT });
    dispatch(push('/login'));
  }
}