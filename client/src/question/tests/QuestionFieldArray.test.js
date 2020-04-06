import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import QuestionFieldArray from '../../question/components/QuestionFieldArray'

describe('QuestionnaireForm', () => {
  it('renders self without crashing', () => { 
    const meta = {error: {}, submitFailed: false}
    const component = shallow(<QuestionFieldArray fields={[]} meta={meta}  />)
    expect(toJson(component)).toMatchSnapshot()
  })
})