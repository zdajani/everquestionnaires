import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../actions';
import * as types from '../actionTypes';
import moxios from 'moxios';
import { apiData } from './testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const questionnaireId = 1;

describe('async actions', () => {
  beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });
    
  describe('fetchQuestionnaire success', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: apiData
        });
      });  
    });
    
    it('creates FETCH_QUESTIONNAIRE_SUCCESS when done', () => {
      const expectedActions = [
        { type: types.FETCH_QUESTIONNAIRE },
        { type: types.FETCH_QUESTIONNAIRE_SUCCESS, payload: apiData  
      }];

      const store = mockStore({});
      
      return store.dispatch(actions.fetchQuestionnaire(questionnaireId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  
  describe('fetchQuestionnaires failure', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: { error: "something went wrong"}
        });
      });  
    });
    
    it('creates FETCH_QUESTIONNAIRE_FAILURE when done', () => {
      const expectedActions = [
        { type: types.FETCH_QUESTIONNAIRE },
        { type: types.FETCH_QUESTIONNAIRE_FAILURE, payload: "Bad request" }
      ];

      const store = mockStore({});
      
      return store.dispatch(actions.fetchQuestionnaire(questionnaireId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});