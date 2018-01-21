import { CSSTransition } from 'react-transition-group'
import Transition from 'react-transition-group/Transition'
import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import Button from 'components/Button'
import locales from '../../config/locales'

import Hero from 'components/Home/Hero'
import Quote from 'components/Home/Quote'
import Projects from 'components/Home/Projects'


const HomeWrapper = styled.section``

export default class Home extends Component {
  constructor(props) {
    super(props)
    locales.init(this.props)

    this.state = {}
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        {/* <Logo /> */}
        {/* <h1>{locales.home.hello}</h1> */}
        {/* <Button link={locales.home.link}>{locales.home.btn}</Button> */}
        <Hero></Hero>
        <Quote></Quote>
        <Projects></Projects>
      </HomeWrapper>
    )
  }
}
