import React from 'react';
import { shallow } from 'enzyme';
import QuestionnairesList from '../components/QuestionnairesList';
import { formattedData } from './testData';

//initialize with props if none are given
const setup = (props = formattedData) => {
  
    const component = shallow(
      <QuestionnairesList questionnaires={props}  />
    );

  return {
    component
  };
}

describe('QuestionnairesList component', () => {
    const { component } = setup();
  
  it('renders self with questionnaires props', () => {
    expect(component.instance().props).toEqual({questionnaires: formattedData}); 
    expect(component).toBePresent();
  });
  
  it('renders a list of questionnaire links', () => {
    expect(component.find('ul').children().length).toEqual(Object.keys(formattedData).length);
    // const list = component.find('li');
    // //expect(component.props('questionnaires').children).toEqual(formattedData);
    // expect(component.find('li').map(n => console.log(n.text())));
    // expect(list.at(1)).toEqual(formattedData["2"].id);
  });
});