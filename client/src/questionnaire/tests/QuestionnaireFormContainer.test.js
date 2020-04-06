import React from 'react'
import {shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import ConnectedQuestionnaireFormContainer, {QuestionnaireFormContainer} from '../containers/QuestionnaireFormContainer'
import ConntectedQuestionnaireForm from '../components/QuestionnaireForm'
import {questionnaireWithQuestions} from './testData'

import {reducer as formReducer} from 'redux-form'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

const setup = () => {
  const createQuestionnaireSpy = jest.fn()
  const container = shallow(
    <QuestionnaireFormContainer createQuestionnaire={createQuestionnaireSpy} />
  )
    
  return {
    container,
    createQuestionnaireSpy
  }
}


describe('QuestionnairesForm container', () => {
  it('renders without crashing', () => {  
    const store = createStore(combineReducers({form: formReducer}))
    const createQuestionnaireSpy = jest.fn()
    
    const mountedContainer = mount(
      <Provider store={store}>
        <ConnectedQuestionnaireFormContainer 
          createQuestionnaire={createQuestionnaireSpy} />
      </Provider>)

    expect(toJson(mountedContainer)).toMatchSnapshot()
  })
  
  it('renders QuestionnaireForm component', () => {  
    const {container} = setup()
    expect(toJson(container.find(ConntectedQuestionnaireForm))).toMatchSnapshot()
  })
  
  it('calls createQuestionnaire on handleFormSubmit', () => {    
    const {container, createQuestionnaireSpy} = setup()
    container.instance().handleFormSubmit(questionnaireWithQuestions)
    expect(createQuestionnaireSpy).toBeCalledWith(questionnaireWithQuestions)
  })
})