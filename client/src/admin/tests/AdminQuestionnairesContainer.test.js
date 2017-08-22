import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import ConnectedAdminQuestionnairesContainer, { AdminQuestionnairesContainer } from '../containers/AdminQuestionnairesContainer';
import QuestionnairesList from '../../questionnaires/components/QuestionnairesList';
import Loading from '../../commonComponents/Loading';
import { formattedData } from './testData';

const middlewares = []
const mockStore = configureMockStore(middlewares);


// setup to return QuestionnairesContainer not the one wrapped by connected()
// this so to test just the rendering of the component
const setup = (formattedData, isLoading) => {
  const container = shallow(
      <AdminQuestionnairesContainer 
        questionnaires={formattedData} 
        isLoading={isLoading}/>
  );
    
  return {
    container
  };
}

const connectedSetup = (store) => {
  const connectedContainer = shallow(
      <ConnectedAdminQuestionnairesContainer store={store}/>
  );
  return {
    connectedContainer
  };
}

describe('AdminQuestionnaires container', () => {
  it('renders without crashing', () => {  
    const store = mockStore({
      adminQuestionnaires: {
        isLoading: false, 
        data: null,
        errorMessage: null
      },
    });
    
    const fetchAdminQuestionnairesSpy = jest.fn();
    // using mount for Full DOM rendering to make sure 
    //the component doesn't crash 
    const mountedComponent = mount(<AdminQuestionnairesContainer 
      store={store} 
      isLoading={false} 
      fetchAdminQuestionnaires={fetchAdminQuestionnairesSpy}/>);
    
    expect(toJson(mountedComponent)).toMatchSnapshot();
  });
  
  describe('when questionnaires data is available', () => {  
    const store = mockStore({
      adminQuestionnaires: {
        isLoading: false, 
        data: formattedData,
        errorMessage: null
      },
    });
    
    it('renders self with questionnaires props', () => {   
      const { connectedContainer } = connectedSetup(store); 
      expect(connectedContainer).toHaveProp('questionnaires', formattedData);
      expect(toJson(connectedContainer)).toMatchSnapshot();
    });
    
    it('renders QuestionnairesList component', () => {   
      const isloading = false; 
      const { container } = setup(formattedData, isloading);    

      expect(container).toContainReact(
        <QuestionnairesList questionnaires={formattedData} />
      );
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
    
    it('does not render QuestionnairesList component', () => {  
      expect(container).not.toContainReact(
        <QuestionnairesList questionnaires={formattedData} />
      );
    });
  });
});