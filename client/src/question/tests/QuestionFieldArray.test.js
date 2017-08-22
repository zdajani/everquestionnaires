import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import QuestionFieldArray from '../../question/components/QuestionFieldArray';

describe('QuestionnaireForm', () => {
  it('renders self without crashing', () => { 
    const component = shallow(<QuestionFieldArray fields={[]}  />)
    expect(toJson(component)).toMatchSnapshot();
  });
})