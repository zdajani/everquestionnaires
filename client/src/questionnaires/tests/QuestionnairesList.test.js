import React from 'react'
import {shallow} from 'enzyme'

import QuestionnairesList from '../components/QuestionnairesList'

import {formattedData} from './testData'

describe('QuestionnairesList component', () => {
  it('renders correct text and urls when is admin page is false', () => {
    const component = shallow(
      <QuestionnairesList
        questionnaires={formattedData}
        url={'/questionnaires'}
      />
    )

    expect(component).toMatchSnapshot()
  })

  it('renders correct text and urls when is admin page is true', () => {
    const component = shallow(
      <QuestionnairesList
        questionnaires={formattedData}
        isAdminPage
        url={'/admin/questionnaires'}
      />
    )
    expect(component).toMatchSnapshot()
  })
})