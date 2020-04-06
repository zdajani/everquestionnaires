import React from 'react'
import {shallow, mount} from 'enzyme'

import {AnswersFormContainer} from '../containers/AnswersFormContainer'
import AnswersForm from '../components/AnswersForm'
import {answersData, questionnaireData} from './testData'

const createAnswerSpy = jest.fn()
const fetchQuestionnaireSpy = jest.fn()


const sharedProps = {
  match: {url: '/questionnaires/5'},
  createAnswers: createAnswerSpy,
  fetchQuestionnaire: fetchQuestionnaireSpy,
  questionnaire: questionnaireData,
  loading: false
}

xdescribe('AnswersFormContainer', () => {
  describe('when loading is false and questionnaire is present', () => {
    const container = shallow(<AnswersFormContainer {...sharedProps} />)

    it('renders without crashing', () => {
      expect(container).toMatchSnapshot()
    })

    it('renders answers form component', () => {
      expect(container.find(AnswersForm).length).toEqual(1)
    })

    it('calls createQuestionnaire on handleFormSubmit', () => {
      const {container, createAnswerSpy} = setup()
      container.instance().handleFormSubmit(answersData)
      expect(createAnswerSpy).toBeCalledWith(answersData, 1)
    })
  })
})
