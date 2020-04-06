import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {NavBar} from '../NavBar'

const logoutSpy = jest.fn()
const isAuthenthicatedMock = {
  exp: 1234566,
  sub: 1
}

const setup = (isAuthenthicated = isAuthenthicatedMock) => {
  const component = shallow(
    <NavBar 
      logout={logoutSpy}
      isAuthenthicated={isAuthenthicated}
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
    it('renders self isAuthenthicated true props', () => {  
      expect(component.instance().props).toEqual({isAuthenthicated: isAuthenthicatedMock, logout: logoutSpy})
      expect(toJson(component)).toMatchSnapshot()
    })
    
    it('renders self with logout button', () => {  
      expect(toJson(component.find('button').first())).toMatchSnapshot()
    })
    
    it('calls logout on logout button', () => { 
      const {component, logoutSpy} = setup()
      component.find('button').first().simulate('click')
      expect(logoutSpy.mock.calls.length).toBe(1)
    })
  })
  
  describe('when user logged out', () => {
    const {component, logoutSpy} = setup(false)
    it('renders self with isAuthenthicated false props', () => {  
      expect(component.instance().props).toEqual({isAuthenthicated: false, logout: logoutSpy})
    })
    
    it('renders self with login link', () => {  
      expect(toJson(component)).toMatchSnapshot()
    })
  })
})