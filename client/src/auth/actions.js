import axios from 'axios'
import jwtDecode from 'jwt-decode'
import {push} from 'connected-react-router'

import * as types from './actionTypes'

export function authenticateUser({username, password}, isLogin) {


  return (dispatch, getState) => {
    const redirectUrl = getRedirectUrl(getState())

    dispatch({type: types.LOGIN_REQUEST})

    getApiResponse(username, password, isLogin).then(res => {
      localStorage.authToken = res.data.jwt
      dispatch({
        type: types.AUTH_SUCCESS,
        payload: jwtDecode(res.data.jwt)
      })
      dispatch(push(redirectUrl))
    }).catch(error => {
      dispatch({type: types.AUTH_ERROR, payload: getErrors(error.response.data)})
    })
  }
}


export function logout() {
  delete localStorage.authToken
  return dispatch => {
    dispatch({type: types.LOGOUT})
    dispatch(push('/questionnaires'))
  }
}

const getRedirectUrl = state => {
  const routerState = state.router.location.state
  return (
    routerState ? routerState.from : '/questionnaires'
  )
}

const getApiResponse = (username, password, isLogin) => {
  const apiInfo = isLogin ?
    {url: '/user_token', data: {auth: {username, password}}} :
    {url: '/api/users', data: {user: {username, password}}}

  return(
    axios({
      method: 'post',
      url: apiInfo.url,
      data: apiInfo.data
    })
  )
}

const getErrors = errorsResponseData => (
  errorsResponseData || {0: ['username or password is incorrect']}
)