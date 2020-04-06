import React from 'react';
import { shallow } from 'enzyme';
import QuestionnairesList from '../components/QuestionnairesList';
import { formattedData } from './testData';
import toJson from 'enzyme-to-json';

//initialize with props if none are given

const setup = (questionnaires =formattedData, url = '/questionnaires' ) => {
  const component = shallow(
    <QuestionnairesList questionnaires={questionnaires} url={url}   />
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
  
  it('renders admin urls if admin url is given as prop', () => {
    const { component } = setup(formattedData, '/admin');
    expect(component.instance().props).toEqual(
      {questionnaires: formattedData, url:'/admin'}
    );
     
    expect(toJson(component)).toMatchSnapshot();
  });
  
  it('renders a list of questionnaire links', () => {
    expect(toJson(component.find('ul'))).toMatchSnapshot();
  });
});