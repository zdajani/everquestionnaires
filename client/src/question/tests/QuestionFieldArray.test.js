import React from 'react'
import {shallow} from 'enzyme'

import QuestionFieldArray from '../../question/components/QuestionFieldArray'

describe('QuestionnaireForm', () => {
  it('renders self without crashing', () => {
    const meta = {error: {}, submitFailed: false}
    const component = shallow(<QuestionFieldArray fields={[]} meta={meta} />)

    expect(component).toMatchSnapshot()
  })
})