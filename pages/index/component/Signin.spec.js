import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { ThemeProvider } from '@material-ui/styles'
import {
  Typography,
} from '@material-ui/core'
import {
  Alert,
  Container,
  ContainerItem,
} from 'components'
import theme from 'lib/theme'
import { Signin } from './Signin'

describe('Pages/Index/Signin', () => {
  it('should have 2 Container components', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{}} /></ThemeProvider>)

    expect(wrapper.find(Container).length).toEqual(2)

    mount.cleanUp()
  })

  it('should have 3 ContainerItems components', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{}} /></ThemeProvider>)

    expect(wrapper.find(ContainerItem).length).toEqual(3)

    mount.cleanUp()
  })

  it('should print a proper welcome message', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{}} /></ThemeProvider>)

    expect(wrapper.find(Typography).text()).toEqual('Welcome to Metron, please sign in')

    mount.cleanUp()
  })

  it('should print a login with google button', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{}} /></ThemeProvider>)

    expect(wrapper.findWhere((n) => n.text() === 'Google').length).toEqual(1)

    mount.cleanUp()
  })

  it('should print a login with facebook button', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{}} /></ThemeProvider>)

    expect(wrapper.findWhere((n) => n.text() === 'Facebook').length).toEqual(1)

    mount.cleanUp()
  })

  it('should have alert component when auth is error', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{ error: { message: 'auth error' }, isError: true }} /></ThemeProvider>)

    expect(wrapper.find(Alert).length).toEqual(1)

    mount.cleanUp()
  })

  it('should not have alert component when auth is not error', () => {
    const mount = createMount()
    const wrapper = mount(<ThemeProvider theme={theme}><Signin auth={{}} /></ThemeProvider>)

    expect(wrapper.find(Alert).length).toEqual(0)

    mount.cleanUp()
  })
})
