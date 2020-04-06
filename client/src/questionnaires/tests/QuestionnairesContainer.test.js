import React from 'react'
import {shallow} from 'enzyme'

import {QuestionnairesContainer} from '../containers/QuestionnairesContainer'
import QuestionnairesHeader from '../components/QuestionnairesHeader'
import QuestionnairesList from '../../questionnaires/components/QuestionnairesList'
import Loading from '../../shared_components/Loading'

import {formattedData} from './testData'

const setup = (formattedData, isLoading) => (
  shallow(
    <QuestionnairesContainer
      questionnaires={formattedData}
      isLoading={isLoading}
      match={{url: '/questionnaires'}}
    />
  )
)

describe('AdminQuestionnaire container', () => {
  describe('when questionnaires data is available', () => {
    const container = setup(formattedData, false)

    it('renders the AdminQuestionnairesHeader', () => {
      expect(container.find(QuestionnairesHeader)).toMatchSnapshot()
    })

    it('renders the QuestionnairesList', () => {
      expect(container.find(QuestionnairesList)).toMatchSnapshot()
    })

    it('does not render Loading component', () => {
      expect(container).not.toContainReact(<Loading />)
    })
  })

  describe('when loading', () => {
    const container = setup(null, true)

    it('renders loading component', () => {
      expect(container).toContainReact(<Loading />)
    })

    it('does not render QuestionnairesListComponent', () => {
      expect(container).not.toContainReact(
        <QuestionnairesList questionnaires={formattedData} url='/questionnaires' />
      )
    })

    it('does not render AdminQuestionnairesHeader', () => {
      expect(container).not.toContainReact(<QuestionnairesHeader />)
    })
  })
})