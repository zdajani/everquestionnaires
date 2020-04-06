import React from 'react'
import {shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import ConnectedQuestionnaireAnswersFormContainer, {QuestionnaireAnswersFormContainer} from '../containers/QuestionnaireAnswersFormContainer'
import Loading from '../../commonComponents/Loading'
import {formattedData} from './testData'
import ConnectedAnswersFormContainer, {AnswersFormContainer} from '../../answers/containers/AnswersFormContainer'

const middlewares = []
const mockStore = configureMockStore(middlewares)

const setup = (formattedData, isLoading) => {
  const container = shallow(<QuestionnaireAnswersFormContainer
    questionnaire={formattedData} 
    isLoading={isLoading} />
  )
    
  return {
    container
  }
}

const connectedSetup = store => {
  const connectedContainer = shallow(
    <ConnectedQuestionnaireAnswersFormContainer store={store} />
  )
  return {
    connectedContainer
  }
}

describe('Questionnaire container', () => {
  it('renders without crashing', () => {  
    const store = mockStore({
      questionnaire: {
        isLoading: false, 
        data: null,
        errorMessage: null
      }
    })
    
    const fetchQuestionnaireSpy = jest.fn()
    const match = {params: 5}
    // using mount for Full DOM rendering to make sure 
    //the component doesn't crash 
    const mountedComponent = mount(<QuestionnaireAnswersFormContainer 
      store={store} 
      isLoading={false} 
      fetchQuestionnaire={fetchQuestionnaireSpy} 
      match={match} />)

    expect(toJson(mountedComponent)).toMatchSnapshot()
  })
  
  describe('when questionnaire data is available', () => {
    const store = mockStore({
      questionnaire: {
        isLoading: false, 
        data: formattedData,
        errorMessage: null
      }
    })
    
    it('renders self with questionnaire props', () => {   
      const {connectedContainer} = connectedSetup(store)  

      expect(connectedContainer.props().questionnaire).toEqual(formattedData)
      expect(toJson(connectedContainer)).toMatchSnapshot()
    })
    
    it('renders Questionnaire component with questionnaire props', () => {   
      const isloading = false 
      const {container} = setup(formattedData, isloading) 
      
      expect(toJson(container.find(ConnectedAnswersFormContainer))).toMatchSnapshot()    
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
    
    it('does not render Questionnaire component', () => {  
      expect(container.find(AnswersFormContainer).length).toEqual(0)
    })
  })
})