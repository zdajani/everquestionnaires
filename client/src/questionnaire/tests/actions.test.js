import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import * as actions from '../actions'
import * as types from '../actionTypes'
import moxios from 'moxios'
import {apiData, questionnaire} from './testData'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const questionnaireId = 1

describe('questionnaire async actions', () => {
  beforeEach(() => {
    localStorage.authToken = '1234'
    moxios.install()
  })

  afterEach(() => {
    localStorage.clear()
    moxios.uninstall()
  })
    
  describe('fetchQuestionnaire success', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: apiData
        })
      })  
    })
    
    it('creates FETCH_QUESTIONNAIRE_SUCCESS when done', () => {
      const expectedActions = [
        {type: types.FETCH_QUESTIONNAIRE},
        {type: types.FETCH_QUESTIONNAIRE_SUCCESS, payload: apiData  
        }]

      const store = mockStore({})
      
      return store.dispatch(actions.fetchQuestionnaire(questionnaireId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
  
  describe('fetchQuestionnaires failure', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400,
          response: {error: 'Bad request'}
        })
      })  
    })
    
    it('creates FETCH_QUESTIONNAIRE_FAILURE when done', () => {
      const expectedActions = [
        {type: types.FETCH_QUESTIONNAIRE},
        {type: types.FETCH_QUESTIONNAIRE_FAILURE, payload: 'Bad request'}
      ]

      const store = mockStore({})
      
      return store.dispatch(actions.fetchQuestionnaire(questionnaireId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
  
  describe('createQuestionnaire success', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200
        })
      })  
    })
    
    it('creates CREATE_QUESTIONNAIRE_SUCCESS when done', () => {
      const expectedActions = [
        {type: types.CREATE_QUESTIONNAIRE},
        {type: types.CREATE_QUESTIONNAIRE_SUCCESS},
        {type: '@@router/CALL_HISTORY_METHOD', payload: {method: 'push', args: ['/questionnaires']}}]

      const store = mockStore({})
      
      return store.dispatch(actions.createQuestionnaire(questionnaire)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
  
  describe('createQuestionnaire failure', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400,
          response: {error: 'Bad request'}
        })
      })  
    })
    
    it('creates CREATE_QUESTIONNAIRE_FAILURE when done', () => {
      const expectedActions = [
        {type: types.CREATE_QUESTIONNAIRE},
        {type: types.CREATE_QUESTIONNAIRE_FAILURE, payload: 'Bad request'}
      ]

      const store = mockStore({})
      
      return store.dispatch(actions.createQuestionnaire(questionnaire)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})