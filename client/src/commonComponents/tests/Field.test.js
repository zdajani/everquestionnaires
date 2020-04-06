import React from 'react'
import {shallow} from 'enzyme'
import Field from '../Field'
import toJson from 'enzyme-to-json'

describe('Field component', () => {
  it('renders an input field', () => {
    const component = shallow(<Field 
      input='' 
      label='field testing'
      type='text'
      meta={{touched: false, error: {}}} />)
    
    expect(toJson(component)).toMatchSnapshot()
  })
})