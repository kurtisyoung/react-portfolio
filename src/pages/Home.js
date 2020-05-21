import React, { Component } from 'react'
import styled from 'styled-components'
import Hero from 'components/Home/Hero'
import Quote from 'components/Home/Quote'
import Projects from 'components/Home/Projects'

const HomeWrapper = styled.section``

export default class Home extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <HomeWrapper class="loader">
        <Hero />
        <Quote />
        <Projects />
      </HomeWrapper>
    )
  }
}
