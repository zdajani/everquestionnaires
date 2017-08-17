import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';

describe('Loading component', () => {
  it('should render loading page', () => {
    const component = shallow(
      <Loading />
    );
    expect(component.text()).toContain("...Loading")
  });
});