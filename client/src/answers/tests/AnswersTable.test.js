import React from 'react'
import {shallow} from 'enzyme'
import AnswersTable from '../components/AnswersTable'
import {answersTableData} from './testData'


describe('AnswersTable component', () => {
  it('renders correctly', () => {
    const component = shallow(
      <AnswersTable
        questions={answersTableData.questions}
        usersAnswers={answersTableData.usersAnswers}
      />
    )
    expect(component).toMatchSnapshot()
  })
})