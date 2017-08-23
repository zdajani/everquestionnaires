import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import ConnectedAdminQuestionnaireContainer, { AdminQuestionnaireContainer } from '../containers/AdminQuestionnaireContainer';
import AdminQuestionnaire from '../../questionnaires/components/AdminQuestionnaire';
import Loading from '../../commonComponents/Loading';
import { formattedData } from './testData';

const middlewares = []
const mockStore = configureMockStore(middlewares);

const setup = (formattedData, isLoading) => {
  const container = shallow(
    <AdminQuestionnaireContainer 
      questionnaires={formattedData} 
      isLoading={isLoading}/>
  );
    
  return {
    container
  };
}

const connectedSetup = (store) => {
  const connectedContainer = shallow(
      <ConnectedAdminQuestionnaireContainer store={store}/>
  );
  return {
    connectedContainer
  };
}

describe('AdminQuestionnaire container', () => {
  it('renders without crashing', () => {  
    const store = mockStore({
      adminQuestionnaire: {
        isLoading: false, 
        data: null,
        errorMessage: null
      },
    });
    
    const fetchAdminQuestionnaireSpy = jest.fn();
    const mountedComponent = mount(<AdminQuestionnaireContainer 
      store={store} 
      isLoading={false} 
      fetchAdminQuestionnaire={fetchAdminQuestionnaireSpy}/>);
    
    expect(toJson(mountedComponent)).toMatchSnapshot();
  });
  
  describe('when questionnaires data is available', () => {  
    const store = mockStore({
      adminQuestionnaire: {
        isLoading: false, 
        data: formattedData,
        errorMessage: null
      },
    });
    
    it('renders self with questionnaires props', () => {   
      const { connectedContainer } = connectedSetup(store); 
      expect(connectedContainer).toHaveProp('questionnaire', formattedData);
      expect(toJson(connectedContainer)).toMatchSnapshot();
    });
    
    it('renders QuestionnairesList component', () => {   
      const isloading = false; 
      const { container } = setup(formattedData, isloading);    

      expect(container).toContainReact(
        <AdminQuestionnaire questionnaires={formattedData} />
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
        <AdminQuestionnaire questionnaires={formattedData} />
      );
    });
  });
});