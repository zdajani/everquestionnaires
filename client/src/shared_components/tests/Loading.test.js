import React from 'react'
import {shallow} from 'enzyme'
import Loading from '../Loading'
import toJson from 'enzyme-to-json'

describe('Loading component', () => {
  it('should render loading page', () => {
    const component = shallow(<Loading />)
    expect(toJson(component)).toMatchSnapshot()
  })
})