import React, { Component } from 'react'
import styled from 'styled-components'
import HeroSection from 'components/Home/HeroSection'
import QuoteSection from 'components/Home/QuoteSection'
import ProjectsSection from 'components/Home/ProjectsSection'

const HomeWrapper = styled.section``

export default class Home extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <HomeWrapper class="loader">
        <HeroSection />
        <QuoteSection />
        <ProjectsSection />
      </HomeWrapper>
    )
  }
}
