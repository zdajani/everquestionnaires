import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import {NavBar} from '../NavBar'

const logoutSpy = jest.fn()

const isAuthenticatedMock = {
  exp: 1234566,
  sub: 1
}

const setup = (isAuthenticated = isAuthenticatedMock) => {
  const component = shallow(
    <NavBar
      logout={logoutSpy}
      isAuthenticated={isAuthenticated}
    />
  )

  return {
    logoutSpy,
    component
  }
}

describe('NavBar', () => {
  describe('when user logged in', () => {
    const {component, logoutSpy} = setup()

    it('renders self with logout button', () => {
      expect(component.find('button').first()).toMatchSnapshot()
    })

    it('calls logout on logout button', () => {
      component.find('button').first().simulate('click')

      expect(logoutSpy.mock.calls.length).toBe(1)
    })
  })

  describe('when user is logged out', () => {
    const {component} = setup(false)

    it('renders correctly', () => {
      expect(component).toMatchSnapshot()
    })

    it('renders login link', () => {
      expect(component).toIncludeText('Login')
    })
  })
})