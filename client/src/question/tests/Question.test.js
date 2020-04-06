import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Question from '../components/Question'
import {formattedData} from './testData'

const setup = (question = formattedData) => {
  const component = shallow(
    <Question {...question} />
  )

  return {
    component
  }
}

describe('Question component', () => {
  it('renders correctly', () => {
    expect(shallow(<Question {...formattedData} />)).toMatchSnapshot()
  })
})
