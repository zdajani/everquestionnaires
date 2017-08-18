import React from 'react';
import { shallow } from 'enzyme';
import Question from '../components/Question';
import { formattedData } from './testData';


const setup = (question = formattedData) => {
  const component = shallow(
    <Question {...question}  />
  );

  return {
    component
  };
}

describe('Question component', () => {
  it('should render name and label', () => {
    const { component } = setup();
    expect(component.text()).toContain(formattedData.name)
    expect(component.text()).toContain(formattedData.label)
  });
});
