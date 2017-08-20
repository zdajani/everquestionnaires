import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../actions';
import * as types from '../actionTypes';
import moxios from 'moxios';
import { createAnswersData } from './testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('answers async actions', () => {
  beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });
    
  describe('createAnswers success', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200
        });
      });  
    });
    
    it('creates CREATE_ANSWERS_SUCCESS when done', () => {
      const expectedActions = [
        { type: types.CREATE_ANSWERS },
        { type: types.CREATE_ANSWERS_SUCCESS  
      }];

      const store = mockStore({});
      
      return store.dispatch(actions.createAnswers(createAnswersData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  
  describe('createQuestionnaire failure', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: { error: "Bad request"}
        });
      });  
    });
    
    it('creates CREATE_QUESTIONNAIRE_FAILURE when done', () => {
      const expectedActions = [
        { type: types.CREATE_ANSWERS },
        { type: types.CREATE_ANSWERS_FAILURE, payload: "Bad request" }
      ];

      const store = mockStore({});
      
      return store.dispatch(actions.createAnswers(createAnswersData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});