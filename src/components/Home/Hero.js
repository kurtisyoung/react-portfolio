import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'react-static'
import Plx from 'react-plx'


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  top: 64px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;
  &.active {
    h1 {
      opacity: 1;
      left: 0;
    }
  }
`

const ContentContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    height: 100%;
    width: 42%;
    align-items: flex-start;
    text-align: left;
    &.k-container {
      text-align: right;
      width: 58%;
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
  .k-gradient {
    left: 53%;
    @media (min-width: 768px) {
      left: 6%;
    }
  }
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  position: relative;
  opacity: 0;
  left: 20px;
  transition: 500ms ease-out;
  color: black;
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

const Description = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 1px;
`

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5em 2em;
  margin-top: 1em;
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #000;
  border-radius: 2px;

  &:active,
  &:hover,
  &:visited {
    color: #f1f1f1;
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

  render() {
    const blackParallax = [
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
          <Title className="large">Web Developer</Title>
          <Title className="medium">Web Creator</Title>
          <Title className="small">Web Spinner</Title>
        </ContentContainer>
        <ContentContainer className="k-container">
          <Plx
            className="k k-black"
            parallaxData={blackParallax} // your parallax effects, see beneath
          >
            <img
              src="/assets/img/home/k-black.svg"
              alt="K"
            />
          </Plx>
          <Plx
            className="k k-gradient"
            parallaxData={gradParallax} // your parallax effects, see beneath
          >
            <img
              src="/assets/img/home/k-gradient.svg"
              alt="K"
            />
          </Plx>
        </ContentContainer>
      </Container>
    );
  }
}

