import React, { Component } from 'react'
import Plx from 'react-plx'
import {
  StyledContainer,
  StyledContentContainer,
  StyledTitle,
  StyledContent,
  EmojiSpan,
} from './StyledHeroSection'

const baseYear = 2016

const today = new Date()
const currentYear = today.getFullYear()

const developerYears = currentYear - baseYear


export default class Hero extends Component {
  componentDidMount () {
    this._loadAnimation()
    // window.addEventListener('load', this._loadAnimation())
  }
  _loadAnimation () {
    setTimeout(() => {
      let heroID = document.getElementById('hero')

      heroID.classList.add('active')
    }, 200)
  }

  render () {
    const shadowParallax = [
      {
        start: 0,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: 50,
            property: 'marginTop',
          },
        ],
      },
    ]
    const gradParallax = [
      {
        start: 0,
        duration: 400,
        properties: [
          {
            startValue: 0,
            endValue: -30,
            property: 'marginTop',
          },
        ],
      },
    ]
    return (
      <StyledContainer id="hero" className="container" {...this.props}>
        <StyledContentContainer>
          {/* <Title className="large">Web Developer</Title>
          <Title className="medium">Web Creator</Title>
          <Title className="small">Web Spinner</Title> */}
          <StyledTitle className="large"><EmojiSpan className="hi">Hi</EmojiSpan></StyledTitle>
          <StyledContent delay={300}>
            My name is Kurtis. I'm currently living in <EmojiSpan className="van">Vancouver, BC</EmojiSpan> but I grew up in <EmojiSpan className="edm">Edmonton, AB</EmojiSpan> a diehard <EmojiSpan className="oil">Oilers</EmojiSpan> fan.
          </StyledContent>
          <StyledContent delay={600}>
            I specialize in developing <EmojiSpan className="web">web</EmojiSpan> applications using modern <EmojiSpan className="js">JavaScript</EmojiSpan> frameworks.
          </StyledContent>
          <StyledContent delay={600}>
            I've been coding for <EmojiSpan className="old">{developerYears}+ years</EmojiSpan> split between my previous role at <a href="https://www.bamcommunications.ca/" target="_blank" rel="noopener noreferrer"><EmojiSpan className="bam">BAM</EmojiSpan></a> and my current position at <a href="https://www.auroramj.com/" target="_blank" rel="noopener noreferrer"><EmojiSpan className="aurora">Aurora</EmojiSpan></a>. Check out some of my <EmojiSpan className="work">work</EmojiSpan> and favourite <EmojiSpan className="quotes">quotes</EmojiSpan> below.
          </StyledContent>
        </StyledContentContainer>
        <StyledContentContainer className="k-container">
          <Plx
            className="k k-shadow"
            parallaxData={shadowParallax} // your parallax effects, see beneath
          >
            <img
              src="/assets/img/home/k-shadow.svg"
              alt="K"
            />
          </Plx>
          <Plx
            className="k k-color"
            parallaxData={gradParallax} // your parallax effects, see beneath
          >
            <img
              src="/assets/img/home/k-color.svg"
              alt="K"
            />
          </Plx>
        </StyledContentContainer>
      </StyledContainer>
    )
  }
}

