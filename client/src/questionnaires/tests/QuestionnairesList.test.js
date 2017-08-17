import React from 'react';
import { shallow } from 'enzyme';
import QuestionnairesList from '../components/QuestionnairesList';
import Questionnaire from '../components/Questionnaire';

const props = [{
  id: 1, 
  title: "Lord of the Rings",
  created_at:  "2017-08-15T18:24:26.586Z",
  updated_at:  "2017-08-15T18:24:26.586Z",
},{
  id: 2, 
  title: "Lord of the Flies",
  created_at:  "2017-08-15T18:24:26.586Z",
  updated_at:  "2017-08-15T18:24:26.586Z"
}];

//initialize with props if none are given
const setup = (questionnaires = {1: props[0]}) => {
    const component = shallow(
      <QuestionnairesList questionnaires={questionnaires}  />
    );

  return {
    component
  };
}

describe('QuestionnairesList component', () => {
  it('passes props to Questionnaire components', () => {
    const { component } = setup();
    
    //note: .props() method only allows for one node aka one questionnaires object
    // find the node Questionnaire and return it is props 
  
    expect(component.find(Questionnaire).props()).toEqual(props[0]); 
    expect(component.find(Questionnaire).length).toEqual(1);
  });
  
  it('renders a list of Questionnaire components', () => {
    const { component } = setup({1: props[0], 2: props[1]}); 
    expect(component.find(Questionnaire).length).toEqual(2);
  });
});