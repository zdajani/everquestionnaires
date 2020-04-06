import { fetchQuestionnaireReducer, createQuestionnaireReducer } from '../reducer';
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
    expect(fetchQuestionnaireReducer(undefined, {})).toEqual({
      isLoading: false, 
      data: null,
      errorMessage: null
    });
  });

  describe('fetchQuestionnaireReducer', () => {
    it('changes isLoading to true when FETCH_QUESTIONNAIRE is dispatched', () => {
      expect(fetchQuestionnaireReducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRE
        })).toEqual({
          isLoading: true, 
          data: null,
          errorMessage: null
      });
    });
      
    describe('when FETCH_QUESTIONNAIRE_SUCCESS is dispatched', () => {
      it('changes loading to false', () => {
        expect(fetchQuestionnaireReducer(isLoadingState, {
            type: types.FETCH_QUESTIONNAIRE_SUCCESS,
            payload: {}
         })).toEqual({ 
            isLoading: false, 
            data: {},
            errorMessage: null
        });
      });
      
      it('contains the questionnaires from the action', () => {
        expect(fetchQuestionnaireReducer(isLoadingState, {
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
        expect(fetchQuestionnaireReducer(isLoadingState, {
            type: types.FETCH_QUESTIONNAIRE_FAILURE,
            payload: "Bad request"
         })).toEqual({ 
            isLoading: false, 
            data: null,
            errorMessage: "Bad request"
        });
      });
    
      it('contains an error message', () => {
        expect(fetchQuestionnaireReducer(isLoadingState, {
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
  
  describe('createQuestionnaireReducer', () => {
    it('changes isLoading to true when CREATE_QUESTIONNAIRE is dispatched', () => {
      expect(createQuestionnaireReducer(isLoadingState, {
          type: types.CREATE_QUESTIONNAIRE
        })).toEqual({
          isLoading: true, 
          data: null,
          errorMessage: null
      });
    });
      
    describe('when CREATE_QUESTIONNAIRE_SUCCESS is dispatched', () => {
      it('changes loading to false', () => {
        expect(createQuestionnaireReducer(isLoadingState, {
            type: types.CREATE_QUESTIONNAIRE_SUCCESS
         })).toEqual({ 
            isLoading: false, 
            data: null,
            errorMessage: null
        });
      });
      
    describe('when CREATE_QUESTIONNAIRE_FAILURE is dispatched', () => {
      it('changes loading to false', () => {
        expect(createQuestionnaireReducer(isLoadingState, {
            type: types.CREATE_QUESTIONNAIRE_FAILURE,
            payload: "Bad request"
         })).toEqual({ 
            isLoading: false, 
            data: null,
            errorMessage: "Bad request"
        });
      });
    
      it('contains an error message', () => {
        expect(createQuestionnaireReducer(isLoadingState, {
            type: types.CREATE_QUESTIONNAIRE_FAILURE,
            payload: "Bad request"
          })).toEqual({ 
            isLoading: false, 
            data: null,
            errorMessage: "Bad request"
          });
        });
      });
    });
  });
});