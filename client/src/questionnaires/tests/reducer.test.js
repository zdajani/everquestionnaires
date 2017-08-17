import reducer from '../reducer';
import * as types from '../actionTypes';

describe('questionnaires reducer', () => {
  const data = [{
      id: 1, 
      title: "Lord of the Rings",
      created_at: "2017-08-15T18:24:26.586Z",
      updated_at: "2017-08-15T18:24:26.586Z"
    },
    {
      id: 2, 
      title: "Lord of the Flies",
      created_at: "2017-08-15T18:24:26.586Z",
      updated_at: "2017-08-15T18:24:26.586Z"
    }]
  
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

  it('changes isLoading to true when FETCH_QUESTIONNAIRES is dispatched', () => {
    expect(reducer(isLoadingState, {
        type: types.FETCH_QUESTIONNAIRES
      })).toEqual({
        isLoading: true, 
        data: null,
        errorMessage: null
    });
  });
    
  describe('when FETCH_QUESTIONNAIRES_SUCCESS is dispatched', () => {
    it('changes loading to false', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRES_SUCCESS,
          payload: {}
       })).toEqual({ 
          isLoading: false, 
          data: {},
          errorMessage: null
      });
    });
    
    it('contains the questionnaires from the action', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRES_SUCCESS,
          payload: data
       })).toEqual({ 
          isLoading: false, 
          data: {
            1: data[0],
            2: data[1]
        },
        errorMessage: null
      });
    });
  });
  
  describe('when FETCH_QUESTIONNAIRES_FAILURE is dispatched', () => {
    it('changes loading to false', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRES_FAILURE,
          payload: "Bad request"
       })).toEqual({ 
          isLoading: false, 
          data: null,
          errorMessage: "Bad request"
      });
    });
  
    it('contains an error message', () => {
      expect(reducer(isLoadingState, {
          type: types.FETCH_QUESTIONNAIRES_FAILURE,
          payload: "Bad request"
       })).toEqual({ 
          isLoading: false, 
          data: null,
          errorMessage: "Bad request"
      });
    });
  });
});
