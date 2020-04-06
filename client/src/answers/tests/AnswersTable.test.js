import React from 'react';
import { shallow } from 'enzyme';
import AnswersTable from '../components/AnswersTable';
import { answersTableData } from './testData';
import toJson from 'enzyme-to-json';

const setup = () => {
  const component = shallow(
    <AnswersTable 
      questions={answersTableData.questions} 
      usersAnswers={answersTableData.usersAnswers} />
  );
    
  return {
    component
  };
}

describe('AnswersTable component', () => {
  const { component } = setup();
  
  it('renders self with questions and answers props', () => {
    expect(component.instance().props).toEqual(
      {
        questions: answersTableData.questions, 
        usersAnswers:answersTableData.usersAnswers
      })
      expect(toJson(component)).toMatchSnapshot();
  });
})