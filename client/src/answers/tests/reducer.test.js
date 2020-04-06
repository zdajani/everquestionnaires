import reducer from '../reducer';
import * as types from '../actionTypes';

describe('answers reducer', () => {
  const isLoadingState = {
    isLoading: true, 
    errorMessage: null
  };
  
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false, 
      errorMessage: null
    });
  });

  it('changes isLoading to true when CREATE_ANSWERS is dispatched', () => {
    expect(reducer(isLoadingState, {
        type: types.CREATE_ANSWERS
      })).toEqual({
        isLoading: true, 
        errorMessage: null
    });
  });
    
  describe('when CREATE_ANSWERS_SUCCESS is dispatched', () => {
    it('changes loading to false', () => {
      expect(reducer(isLoadingState, {
          type: types.CREATE_ANSWERS_SUCCESS
       })).toEqual({ 
          isLoading: false, 
          errorMessage: null
      });
    });
    
  describe('when CREATE_ANSWERS_FAILURE is dispatched', () => {
    it('changes loading to false', () => {
      expect(reducer(isLoadingState, {
          type: types.CREATE_ANSWERS_FAILURE,
          payload: "Bad request"
       })).toEqual({ 
          isLoading: false, 
          errorMessage: "Bad request"
      });
    });
  
    it('contains an error message', () => {
      expect(reducer(isLoadingState, {
          type: types.CREATE_ANSWERS_FAILURE,
          payload: "Bad request"
        })).toEqual({ 
          isLoading: false, 
          errorMessage: "Bad request"
        });
      });
    });
  });
});