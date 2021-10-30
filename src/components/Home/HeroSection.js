import React, { Component, useEffect } from 'react';
import Plx from 'react-plx';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  top: 64px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 730px;
  justify-content: space-between;
  @media (min-width: 768px) {
    min-height: 840px;
  }
  @media (min-width: 992px) {
    min-height: 600px;
  }
  &.active {
    h1 {
      opacity: 1;
      left: 0;
    }
    p {
      opacity: 1;
      left: 0;
    }
  }
`

const StyledContentContainer = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  position: relative;
  text-align: left;
  @media (min-width: 768px) {
    min-height: 500px;
  }
  @media (min-width: 992px) {
    height: 100%;
    width: 46%;
    align-items: flex-start;
    &.k-container {
      text-align: right;
      width: 45%;
    }
  }
  .k {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
      max-width: 400px;
    }
    @media (min-width: 992px) {
      max-width: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      max-width: 300px;
      width: 100%;
      height: auto;
      @media (min-width: 768px) {
      max-width: 400px;
    }
      @media (min-width: 992px) {
        max-width: 100%;
      }
    }
  }
  .k-color {
    left: 53%;
    @media (min-width: 992px) {
      left: 6%;
    }
  }
`

const StyledContent = styled.p`
  font-size: 18px;
  max-width: 700px;
  position: relative;
  margin-top: 0;
  opacity: 0;
  left: 20px;
  transition: opacity 500ms ease-out, left 500ms ease-out;
  transition-delay: ${props => props.delay ? props.delay : 0}ms;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 992px) {
    font-size: 25px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
  }
`

const StyledTitle = styled.h1`
  font-family: var(--font-title);
  font-weight: 500;
  margin: 0;
  position: relative;
  opacity: 0;
  left: 20px;
  transition: opacity 500ms ease-out, left 500ms ease-out;
  color: var(--color-primary);
  &.large {
    font-size: 35px;
    font-weight: 900;
  }
  &.medium {
    font-size: 30px;
    transition-delay: 200ms;
    font-weight: bold;
  }
  &.small {
    font-size: 25px;
    transition-delay: 400ms;
  }
  @media (min-width: 768px) {
    &.large {
      font-size: 40px;
    }
    &.medium {
      font-size: 35px;
    }
    &.small {
      font-size: 30px;
    }
  }
`
const EmojiSpan = styled.span`
  position: relative;
  cursor: pointer;
  font-weight: bold;
  transition: 200ms ease;
  &:after {
    content: "😋";
    top: 0;
    position: absolute;
    opacity: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    text-shadow: 0 2px 4px rgba(0,0,0,.3);
    transition: 200ms ease-in-out;
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
  &:hover, &:active, &:focus {
    &:after {
      opacity: 1;
      transform: translate3d(-50%, -23px, 0);
      @media (min-width: 1024px) {
        transform: translate3d(-50%, -36px, 0);
      }
    }
  }
  &.hi {
    font-weight: 900;
    &:after {
      content: '👋🏼';
    }
  }
  &.van {
    &:hover, &:active, &:focus {
      color: #89C538;
    }
    &:after {
      content: '🏞';
    }
  }
  &.edm {
    &:hover, &:active, &:focus {
      color: #378DD5;
    }
    &:after {
      content: '🛣';
    }
  }
  &.oil {
    &:hover, &:active, &:focus {
      color: #fc4c02;
    }
    &:after {
      content: '🧡';
    }
  }
  &.web {
    &:hover, &:active, &:focus {
      color: red;
    }
    &:after {
      content: '🕸';
    }
  }
  &.js {
    &:hover, &:active, &:focus{
      color: #F0DB4F;
    }
    &:after {
      content: '🚀';
    }
  }
  &.bam {
    text-decoration: underline;
    &:hover, &:active, &:focus {
      color: var(--color-bam);
      text-decoration-color: var(--color-bam);
    }
    &:after {
      content: '💥';
    }
  }
  &.old {
    &:hover, &:active, &:focus{
      color: darkgray;
    }
    &:after {
      content: '👴🏽';
    }
  }
  &.aurora {
    text-decoration: underline;
    &:hover, &:active, &:focus {
      color: var(--color-aurora);
      text-decoration-color: var(--color-aurora);
    }
    &:after {
      content: '🌈';
    }
  }
  &.arcteryx {
    text-decoration: underline;
    &:hover, &:active, &:focus {
      color: var(--color-arcteryx);
      text-decoration-color: var(--color-arcteryx);
    }
    &:after {
      content: '🐥';
    }
  }
  &.work {
    &:hover, &:active, &:focus{
      color: var(--color-secondary);
    }
    &:after {
      content: '💻';
    }
  }
  &.quotes {
    &:hover, &:active, &:focus{
      color: #F2BF92;
    }
    &:after {
      content: ' 🖋';
    }
  }
  &.nerd {
    &:hover, &:active, &:focus{
      color: purple;
    }
    &:after {
      content: '🤓';
    }
  }
`

const HeroSection = (props) => {
  const baseYear = 2016
  const today = new Date()
  const currentYear = today.getFullYear()
  const developerYears = currentYear - baseYear
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
  ];
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
  ];

  const _loadAnimation = () => {
    setTimeout(() => {
      let heroID = document.getElementById('hero')

      heroID.classList.add('active')
    }, 200)
  };

  useEffect(() => {
    _loadAnimation()
  }, []);

  return (
    <StyledContainer id="hero" className="container">
      <StyledContentContainer>
        <StyledTitle className="large"><EmojiSpan className="hi">Hi</EmojiSpan></StyledTitle>
        <StyledContent delay={300}>
          My name is Kurtis. I grew up in <EmojiSpan className="edm">Edmonton, AB</EmojiSpan> a diehard <EmojiSpan className="oil">Oilers</EmojiSpan> fan. I moved to <EmojiSpan className="van">Vancouver, BC</EmojiSpan> to pursue a career in <s>accounting</s> <EmojiSpan className="nerd">tech</EmojiSpan>.
        </StyledContent>
        <StyledContent delay={600}>
          I specialize in developing <EmojiSpan className="web">web</EmojiSpan> applications using modern <EmojiSpan className="js">JavaScript</EmojiSpan> frameworks.
        </StyledContent>
        <StyledContent delay={600}>
          I've been coding for <EmojiSpan className="old">{developerYears}+ years</EmojiSpan>. I'm currently working at <a href="https://www.arcteryx.com/" target="_blank" rel="noopener noreferrer"><EmojiSpan className="arcteryx">Arc'teryx</EmojiSpan></a>. Previously I worked at <a href="https://www.bamcommunications.ca/" target="_blank" rel="noopener noreferrer"><EmojiSpan className="bam">BAM</EmojiSpan></a> and <a href="https://www.auroramj.com/" target="_blank" rel="noopener noreferrer"><EmojiSpan className="aurora">Aurora</EmojiSpan></a>. Check out some of my <EmojiSpan className="work">work</EmojiSpan> and favourite <EmojiSpan className="quotes">quotes</EmojiSpan> below.
        </StyledContent>
      </StyledContentContainer>
      <StyledContentContainer className="k-container">
        <Plx
          className="k k-shadow"
          parallaxData={shadowParallax} // your parallax effects, see beneath
        >
          <img src="/assets/img/k-shadow.svg" alt="K" />
        </Plx>
        <Plx
          className="k k-color"
          parallaxData={gradParallax} // your parallax effects, see beneath
        >
          <img src="/assets/img/k-color.svg" alt="K" />
        </Plx>
      </StyledContentContainer>
    </StyledContainer>
  )
}

export default HeroSection;