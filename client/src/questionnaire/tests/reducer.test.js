import reducer from '../reducer';
import * as types from '../actionTypes';
import * as data from './testData';

describe('questionnaire reducer', () => {
  // reduce code repetition since initial state defaults to isLoading as false 
  const isLoadingState = {
    isLoading: true, 
    data: null,
    errorMessage: null
  };
  
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false, 
      data: null,
      errorMessage: null
    });
  });

  it('changes isLoading to true when FETCH_QUESTIONNAIRE is dispatched', () => {
    expect(reducer(isLoadingState, {
        type: types.FETCH_QUESTIONNAIRE
      })).toEqual({
        isLoading: true, 
        data: null,
        errorMessage: null
    });
  });
    
  describe('when FETCH_QUESTIONNAIRE_SUCCESS is dispatched', () => {
    it('changes loading to false', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRE_SUCCESS,
          payload: {}
       })).toEqual({ 
          isLoading: false, 
          data: {},
          errorMessage: null
      });
    });
    
    it('contains the questionnaires from the action', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRE_SUCCESS,
          payload: data.apiData
       })).toEqual({ 
          isLoading: false, 
          data: data.formattedData,
        errorMessage: null
      });
    });
  });
  
  describe('when FETCH_QUESTIONNAIRE_FAILURE is dispatched', () => {
    it('changes loading to false', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRE_FAILURE,
          payload: "Bad request"
       })).toEqual({ 
          isLoading: false, 
          data: null,
          errorMessage: "Bad request"
      });
    });
  
    it('contains an error message', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRE_FAILURE,
          payload: "Bad request"
       })).toEqual({ 
          isLoading: false, 
          data: null,
          errorMessage: "Bad request"
      });
    });
  });
});
