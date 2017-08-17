import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../actions';
import * as types from '../actionTypes';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const data = { questionnaires: [{
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
 }] }

describe('async actions', () => {
  beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });
    
  describe('fetchQuestionnaires success', () => {
    beforeEach(() => {
      //mocking axois request
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data
        });
      });  
    });
    
    it('creates FETCH_QUESTIONNAIRES_SUCCESS when done', () => {
      const expectedActions = [
        { type: types.FETCH_QUESTIONNAIRES },
        { type: types.FETCH_QUESTIONNAIRES_SUCCESS, payload: data  
      }];

      const store = mockStore({});
      
      return store.dispatch(actions.fetchQuestionnaires()).then(() => {
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
    
    it('creates FETCH_QUESTIONNAIRES_FAILURE when done', () => {
      const expectedActions = [
        { type: types.FETCH_QUESTIONNAIRES },
        { type: types.FETCH_QUESTIONNAIRES_FAILURE, payload: "Bad request" }
      ];

      const store = mockStore({});
      
      return store.dispatch(actions.fetchQuestionnaires()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});