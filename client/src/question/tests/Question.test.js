import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Question from '../components/Question'
import {formattedData} from './testData'

const setup = (question = formattedData) => {
  const component = shallow(
    <Question {...question}  />
  )

  return {
    component
  }
}

describe('Question component', () => {
  it('renders self with question props ', () => {
    const {component} = setup()
    expect(component.instance().props).toEqual({ 
      name: formattedData.name, 
      label:formattedData.label,
      id:  formattedData.id
    }) 
    
    expect(toJson(component)).toMatchSnapshot()
  })
})
