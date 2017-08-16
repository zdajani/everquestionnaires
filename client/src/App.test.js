import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <div>My App</div>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper).toContainReact(welcome)
});