import React from 'react';
import { shallow } from 'enzyme';
import QuestionnairesList from '../components/QuestionnairesList';
import { formattedData } from './testData';
import toJson from 'enzyme-to-json';

//initialize with props if none are given
const setup = (props = formattedData) => {
  const component = shallow(
    <QuestionnairesList questionnaires={props} url='/questionnaires'  />
  );
  
  return {
    component
  };
}

describe('QuestionnairesList component', () => {
  const { component } = setup();
  
  it('renders self with questionnaires props', () => {
    expect(component.instance().props).toEqual(
      {questionnaires: formattedData, url:'/questionnaires'}
    );
     
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders a list of questionnaire links', () => {
    expect(toJson(component.find('ul'))).toMatchSnapshot();
  });
});