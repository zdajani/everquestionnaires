import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as types from '../actionTypes';
import moxios from 'moxios';
import { apiData } from './testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('adminQuestionnaires async actions', () => {
  beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });
    
  describe('fetchAdminQuestionnaires success', () => {
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
    
    it('creates FETCH_ADMIN_QUESTIONNAIRES_SUCCESS when done', () => {
      const expectedActions = [
        { type: types.FETCH_ADMIN_QUESTIONNAIRES },
        { type: types.FETCH_ADMIN_QUESTIONNAIRES_SUCCESS, payload: apiData  
      }];

      const store = mockStore({});
      
      return store.dispatch(actions.fetchAdminQuestionnaires()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  
  describe('fetchAdminQuestionnaires failure', () => {
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
    
    it('creates FETCH_ADMIN_QUESTIONNAIRES_FAILURE when done', () => {
      const expectedActions = [
        { type: types.FETCH_ADMIN_QUESTIONNAIRES },
        { type: types.FETCH_ADMIN_QUESTIONNAIRES_FAILURE, payload: "Bad request" }
      ];

      const store = mockStore({});
      
      return store.dispatch(actions.fetchAdminQuestionnaires()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});