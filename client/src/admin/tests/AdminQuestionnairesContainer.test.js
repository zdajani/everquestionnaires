import React from 'react'
import {shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import ConnectedAdminQuestionnairesContainer, {AdminQuestionnairesContainer} from '../containers/AdminQuestionnairesContainer'
import Questionnaires from '../../questionnaires/components/Questionnaires'
import Loading from '../../commonComponents/Loading'
import {formattedData} from './testData'

const middlewares = []
const mockStore = configureMockStore(middlewares)

const setup = (formattedData, isLoading) => {
  const match = {url: '/admin/questionnaires'}
  const container = shallow(
    <AdminQuestionnairesContainer 
      questionnaires={formattedData} 
      isLoading={isLoading}
      match={match} />
  )
    
  return {
    container,
    match
  }
}

const connectedSetup = store => {
  const connectedContainer = shallow(
    <ConnectedAdminQuestionnairesContainer store={store} />
  )
  return {
    connectedContainer
  }
}

describe('AdminQuestionnaire container', () => {
  it('renders without crashing', () => {  
    const store = mockStore({
      adminQuestionnaires: {
        isLoading: true, 
        data: null,
        errorMessage: null
      }
    })
    
    const fetchAdminQuestionnairesSpy = jest.fn()
    const match = {url: '/admin/questionnaires'}
    
    const mountedComponent = mount(<AdminQuestionnairesContainer 
      store={store} 
      isLoading={true} 
      fetchAdminQuestionnaires={fetchAdminQuestionnairesSpy} 
      match={match} />)
    
    expect(toJson(mountedComponent)).toMatchSnapshot()
  })
  
  describe('when questionnaires data is available', () => {  
    const store = mockStore({
      adminQuestionnaires: {
        isLoading: false, 
        data: formattedData,
        errorMessage: null
      }
    })
    
    it('renders self with questionnaires props', () => {   
      const {connectedContainer} = connectedSetup(store) 
      expect(connectedContainer).toHaveProp('questionnaires', formattedData)
      expect(toJson(connectedContainer)).toMatchSnapshot()
    })
    
    it('renders Questionnaires component', () => {   
      const isloading = false 
      const {container} = setup(formattedData, isloading)    
      const questionnaires = container.find(Questionnaires)
      expect(toJson(questionnaires)).toMatchSnapshot()
    })
    
    it('does not render Loading component', () => {    
      const {container} = setup(formattedData)       
  
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
    
    it('does not render QuestionnairesList component', () => {  
      expect(container).not.toContainReact(
        <Questionnaires questionnaires={formattedData} url='/admin/questionnaires' />
      )
    })
  })
})