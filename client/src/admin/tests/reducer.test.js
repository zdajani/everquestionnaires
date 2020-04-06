import {fetchAdminQuestionnairesReducer} from '../reducer'
import * as types from '../actionTypes'
import {apiData, formattedData} from './testData'

describe('fetchAdminQuestionnaires reducer', () => {
  // reduce code repetition since initial state defaults to isLoading as false 
  const isLoadingState = {
    isLoading: true, 
    data: null,
    errorMessage: null
  }
  
  it('returns the initial state', () => {
    expect(fetchAdminQuestionnairesReducer(undefined, {})).toEqual({
      isLoading: false, 
      data: null,
      errorMessage: null
    })
  })

  it('changes isLoading to true when FETCH_ADMIN_QUESTIONNAIRES is dispatched', () => {
    expect(fetchAdminQuestionnairesReducer(isLoadingState, {
      type: types.FETCH_ADMIN_QUESTIONNAIRES
    })).toEqual({
      isLoading: true, 
      data: null,
      errorMessage: null
    })
  })
    
  describe('when FETCH_ADMIN_QUESTIONNAIRES_SUCCESS is dispatched', () => {
    it('changes loading to false', () => {
      expect(fetchAdminQuestionnairesReducer(isLoadingState, {
        type: types.FETCH_ADMIN_QUESTIONNAIRES_SUCCESS,
        payload: {}
      })).toEqual({ 
        isLoading: false, 
        data: {},
        errorMessage: null
      })
    })
    
    it('contains the questionnaires from the action', () => {
      expect(fetchAdminQuestionnairesReducer(isLoadingState, {
        type: types.FETCH_ADMIN_QUESTIONNAIRES_SUCCESS,
        payload: apiData
      })).toEqual({ 
        isLoading: false, 
        data: formattedData,
        errorMessage: null
      })
    })
  })
  
  describe('when FETCH_QUESTIONNAIRES_FAILURE is dispatched', () => {
    it('changes loading to false', () => {
      expect(fetchAdminQuestionnairesReducer(isLoadingState, {
        type: types.FETCH_ADMIN_QUESTIONNAIRES_FAILURE,
        payload: 'Bad request'
      })).toEqual({ 
        isLoading: false, 
        data: null,
        errorMessage: 'Bad request'
      })
    })
  
    it('contains an error message', () => {
      expect(fetchAdminQuestionnairesReducer(isLoadingState, {
        type: types.FETCH_ADMIN_QUESTIONNAIRES_FAILURE,
        payload: 'Bad request'
      })).toEqual({ 
        isLoading: false, 
        data: null,
        errorMessage: 'Bad request'
      })
    })
  })
})
