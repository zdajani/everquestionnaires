import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import QuestionnaireForm from '../components/QuestionnaireForm';

import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const setup = () => {
  const store = createStore(combineReducers({ form: formReducer }))
  const resetSpy = jest.fn();
  const handleSubmitSpy = jest.fn();
  
  const mountedComponent = mount(
    <Provider store={store}>
      <QuestionnaireForm 
        handleSubmit={handleSubmitSpy}
        reset={resetSpy}
        submitting={false}  />
    </Provider>);
    
  return {
    mountedComponent,
    resetSpy,
    handleSubmitSpy
  };
}

describe('QuestionnaireForm', () => {
  const { mountedComponent, handleSubmitSpy } = setup()
  it('renders self with props', () => {  
    expect(toJson(mountedComponent)).toMatchSnapshot();
  });
  
  it('renders calls handleSubmit on submit button', () => {  
    mountedComponent.find('button').first().simulate('submit');
    expect(handleSubmitSpy.mock.calls.length).toBe(1)
  });
    
});