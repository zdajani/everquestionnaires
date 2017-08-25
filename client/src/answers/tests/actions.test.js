import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../actions';
import * as types from '../actionTypes';
import moxios from 'moxios';
import { answersData } from './testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

localStorage.authToken = "1234"
describe('answers async actions', () => {
  beforeEach(() => {
      localStorage.authToken = "1234"
      moxios.install();
  });

  afterEach(() => {
    localStorage.clear()
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
        { type: types.CREATE_ANSWERS_SUCCESS},
        { type: '@@router/CALL_HISTORY_METHOD',
         payload: { method: 'push', args: ['/questionnaires']} } 
      ]
      
      const store = mockStore({});
      
      return store.dispatch(actions.createAnswers(answersData)).then(() => {
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
      
      return store.dispatch(actions.createAnswers(answersData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});