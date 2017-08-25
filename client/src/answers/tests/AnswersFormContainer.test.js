import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedAnswersFormContainer, { AnswersFormContainer } from '../containers/AnswersFormContainer';
import AnswersForm from '../components/AnswersForm';
import { createAnswersData, questionnaireData } from './testData';

import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const setup = () => {
  const createAnswerSpy = jest.fn();
  const container = shallow(
    <AnswersFormContainer 
      createAnswers={createAnswerSpy} 
      questionnaire={questionnaireData} />
  );
    
  return {
    container,
    createAnswerSpy
  };
}

describe('AnswersForm container', () => {
  it('renders without crashing', () => {  
    const store = createStore(combineReducers({ form: formReducer }))
    const createAnswerSpy = jest.fn();
    
    const mountedContainer = mount(
      <Provider store={store}>
       <ConnectedAnswersFormContainer 
         questionnaire ={questionnaireData}
         createAnswerSpy={createAnswerSpy}/>
      </Provider>);

      expect(mountedContainer).toBePresent();
  });
  
  it('renders QuestionnaireForm component', () => {  
    const { container } = setup()
    expect(container.find(AnswersForm).length).toEqual(1)
  });
  
  it('calls createQuestionnaire on handleFormSubmit', () => {    
    const { container, createAnswerSpy } = setup()
    container.instance().handleFormSubmit(createAnswersData);
    expect(createAnswerSpy).toBeCalledWith(createAnswersData, 1)
  });
});