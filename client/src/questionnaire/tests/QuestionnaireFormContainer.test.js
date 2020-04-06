import React from 'react'
import {shallow} from 'enzyme'
import {QuestionnaireFormContainer} from '../containers/QuestionnaireFormContainer'
import ConnectedQuestionnaireForm from '../components/QuestionnaireForm'
import {questionnaireWithQuestions} from './testData'


describe('QuestionnairesForm container', () => {
  const createQuestionnaireSpy = jest.fn()
  const container = shallow(<QuestionnaireFormContainer createQuestionnaire={createQuestionnaireSpy} />)

  it('renders QuestionnaireForm component', () => {
    expect(container.find(ConnectedQuestionnaireForm)).toMatchSnapshot()
  })

  xit('calls createQuestionnaire on handleFormSubmit', () => {
    container.instance().handleFormSubmit(questionnaireWithQuestions)

    expect(createQuestionnaireSpy).toBeCalledWith(questionnaireWithQuestions)
  })
})