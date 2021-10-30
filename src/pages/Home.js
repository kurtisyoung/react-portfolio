import React, { useEffect } from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'
import HeroSection from 'components/Home/HeroSection'
import QuoteSection from 'components/Home/QuoteSection'
import ProjectsSection from 'components/Home/ProjectsSection'

const HomeWrapper = styled.section``

const Home = ({ projects, quotes }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <HomeWrapper>
      <HeroSection />
      <QuoteSection quotes={quotes} />
      <ProjectsSection projects={projects} />
    </HomeWrapper>
  )
}

export default getRouteProps(Home);