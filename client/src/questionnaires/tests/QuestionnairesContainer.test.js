import React from 'react'
import {shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import ConnectedQuestionnairesContainer, {QuestionnairesContainer} from '../containers/QuestionnairesContainer'
import Questionnaires from '../components/Questionnaires'
import Loading from '../../shared_components/Loading'

const middlewares = []
const mockStore = configureMockStore(middlewares)

const questionnairesData = {
  1: {id: 1,
    title: 'Lord of the Rings',
    created_at: '2017-08-15T18:24:26.586Z',
    updated_at: '2017-08-15T18:24:26.586Z'}
}

// setup to return QuestionnairesContainer not the one wrapped by connected()
// this so to test just the rendering of the component
const setup = (questionnairesData, isLoading) => {
  const match = {url: '/questionnaires'}
  const container = shallow(
    <QuestionnairesContainer
      questionnaires={questionnairesData}
      isLoading={isLoading}
      match={match}
    />
  )

  return {
    container,
    match
  }
}

// setup to return wrapped QuestionnairesContainer
// this is used to test its interaction with Redux
const connectedSetup = store => {
  const connectedContainer = shallow(
    <ConnectedQuestionnairesContainer store={store} />
  )
  return {
    connectedContainer
  }
}

describe('Questionnaires container', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      questionnaires: {
        isLoading: false,
        data: null,
        errorMessage: null
      }
    })

    const fetchQuestionnairesSpy = jest.fn()
    const match = {url: '/questionnaires'}
    // using mount for Full DOM rendering to make sure
    //the component doesn't crash
    const mountedComponent = mount(<QuestionnairesContainer store={store} fetchQuestionnaires={fetchQuestionnairesSpy} match={match} isLoading={true} />)

    expect(toJson(mountedComponent)).toMatchSnapshot()
  })

  describe('when questionnaires data is available', () => {
    const store = mockStore({
      questionnaires: {
        isLoading: false,
        data: questionnairesData,
        errorMessage: null
      }
    })

    it('renders self with questionnaires props', () => {
      const {connectedContainer} = connectedSetup(store)
      expect(connectedContainer).toHaveProp('questionnaires', questionnairesData)
      expect(toJson(connectedContainer)).toMatchSnapshot()
    })

    it('renders Questionnaires component', () => {
      const isloading = false
      const {container} = setup(questionnairesData, isloading)
      const questionnaires = container.find(Questionnaires)
      expect(toJson(questionnaires)).toMatchSnapshot()
    })

    it('does not render Loading component', () => {
      const {container} = setup(questionnairesData)

      expect(container).not.toContainReact(<Loading />)
    })
  })

  describe('when loading', () => {
    const data = null
    const isloading = true
    const {container} = setup(data, isloading)

    it('renders loading component', () => {
      expect(container).toContainReact(<Loading />)
    })

    it('does not render Questionnaires component', () => {
      expect(container).not.toContainReact(
        <Questionnaires questionnaires={questionnairesData} url='/questionnaires' />
      )
    })
  })
})