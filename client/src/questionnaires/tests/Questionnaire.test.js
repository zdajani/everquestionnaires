import React from 'react';
import { shallow } from 'enzyme';
import Questionnaire from '../components/Questionnaire'

const props = {
    id: 1, 
    title: "Lord of the Rings",
    created_at:  "2017-08-15T18:24:26.586Z",
    updated_at:  "2017-08-15T18:24:26.586Z"
};

const setup = (questionnaire = props) => {
  const component = shallow(
    <Questionnaire {...questionnaire}  />
  );

  return {
    component
  };
}

describe('Questionnaire component', () => {
  it('should render title', () => {
    const { component } = setup();
    expect(component.text()).toBe(props.title)
  });
});
