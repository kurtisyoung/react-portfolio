import React, { Component } from 'react'
import styled from 'styled-components'
import Plx from 'react-plx'


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  top: 64px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 730px;
  justify-content: space-between;
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

const ContentContainer = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  position: relative;
  text-align: left;
  @media (min-width: 768px) {
    height: 100%;
    width: 48%;
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
        max-width: 100%;
      }
    }
  }
  .k-color {
    left: 53%;
    @media (min-width: 768px) {
      left: 6%;
    }
  }
`

const Content = styled.p`
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

const Title = styled.h1`
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
      <Container id="hero" className="container" {...this.props}>
        <ContentContainer>
          {/* <Title className="large">Web Developer</Title>
          <Title className="medium">Web Creator</Title>
          <Title className="small">Web Spinner</Title> */}
          <Title className="large">Hi</Title>
          <Content delay={300}>
            My name is Kurtis. Originally from Edmonton, AB, currently living in Vancouver, BC. Forever an <span>Oilers</span> fan.
          </Content>
          <Content delay={600}>
            I specialize in developing modern applications using <span>React</span>, <span>Redux</span> and <span>Styled Components</span>.
          </Content>
          <Content delay={600}>
            I've been coding for 4+ years split between my previous role at <span>BAM</span> and my current position at <span>Aurora</span> as a manager and developer. Check out some of my work and favourite quotes <span>below</span>.
          </Content>
        </ContentContainer>
        <ContentContainer className="k-container">
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
        </ContentContainer>
      </Container>
    )
  }
}

