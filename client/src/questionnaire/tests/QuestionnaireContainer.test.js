import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedQuestionnaireContainer, { QuestionnaireContainer } from '../containers/QuestionnaireContainer';
import Questionnaire from '../components/Questionnaire';
import Loading from '../../commonComponents/Loading';
import { formattedData } from './testData';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const setup = (formattedData, isLoading) => {
  const container = shallow(<QuestionnaireContainer
     questionnaire={formattedData} 
     isLoading={isLoading}/>
  );
    
  return {
    container
  };
}

const connectedSetup = (store) => {
  const connectedContainer = shallow(
      <ConnectedQuestionnaireContainer store={store}/>
  );
  return {
    connectedContainer
  };
}

describe('Questionnaire container', () => {
  it('renders without crashing', () => {  
    const store = mockStore({
      questionnaire: {
        isLoading: false, 
        data: null,
        errorMessage: null
      },
    });
    
    const fetchQuestionnaireSpy = jest.fn();
    const match = {params: 5}
    // using mount for Full DOM rendering to make sure 
    //the component doesn't crash 
    const mountedComponent = mount(<QuestionnaireContainer store={store} isLoading={false} fetchQuestionnaire={fetchQuestionnaireSpy} match={match}/>);
    
    expect(mountedComponent).toBePresent();
  });
  
  describe('when questionnaire data is available', () => {
    const store = mockStore({
      questionnaire: {
        isLoading: false, 
        data: formattedData,
        errorMessage: null
      },
    });
    
    it('renders self with questionnaire props', () => {   
      const { connectedContainer } = connectedSetup(store);  

      expect(connectedContainer.props().questionnaire).toEqual(formattedData);
      expect(connectedContainer).toBePresent();
    });
    
    it('renders Questionnaire component', () => {   
      const isloading = false; 
      const { container } = setup(formattedData, isloading);     
      // this also checks that the props are passed down
      expect(container).toContainReact( <Questionnaire title={formattedData.title} questions={formattedData.questions}/>);
    });
    
    it('does not render Loading component', () => {    
      const { container } = setup(formattedData);       
  
      expect(container).not.toContainReact(<Loading />);
    });
  });
  
  describe('when loading', () => {
    const data = null;
    const isloading = true;     
    const { container } = setup(data, isloading); 
    
    it('renders loading component', () => {  
      expect(container).toContainReact(<Loading />);
    });
    
    it('does not render Questionnaire component', () => {  
      expect(container).not.toContainReact( <Questionnaire title={formattedData.title} questions={formattedData.questions}/>);
    });
  });
});