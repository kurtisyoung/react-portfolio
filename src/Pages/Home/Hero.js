/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../../Components/Link';
import { Parallax } from 'react-scroll-parallax';

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
`;
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
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  position: relative;
  opacity: 0;
  left: 20px;
  transition: 500ms ease-out;
  &.large {
    font-size: 35px;
  }
  &.medium {
    font-size: 30px;
    transition-delay: 200ms;
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
`;

const Description = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 1px;
`;

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
`;

class Hero extends React.Component {
  // scrollParallax() {
  //   let controller = new ScrollMagic.Controller()

  //   var parallax = new TimelineMax().add([
  //     TweenMax.fromTo(
  //       '#kBlack',
  //       1,
  //       { transform: 'translate3d(0, 0px, 0)' },
  //       { transform: 'translate3d(0, -30px, 0)', ease: Linear.easeNone }
  //     ),
  //     TweenMax.fromTo(
  //       '#kGradient',
  //       1,
  //       { transform: 'translate3d(0, 0px, 0)', opacity: 1 },
  //       {
  //         transform: 'translate3d(0, 280px, 0)',
  //         opacity: 0,
  //         ease: Linear.easeNone,
  //       }
  //     ),
  //   ])

  //   // build scene
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement: '#hero',
  //     duration: 1000,
  //     offset: -200,
  //   })
  //     .setTween(parallax)
  //     // .setPin("#heroImage")
  //     // .addIndicators() // add indicators (requires plugin)
  //     .addTo(controller)
  // }
  componentDidMount() {
    window.addEventListener('load', this._loadAnimation());
  }
  _loadAnimation() {
    setTimeout(() => {
      let heroID = document.getElementById('hero');

      heroID.classList.add('active');
    }, 200);
  }

  render() {
    return (
      <Container id="hero" className="container" {...this.props}>
        <ContentContainer>
          <Title className="large">Web Developer</Title>
          <Title className="medium">Web Creator</Title>
          <Title className="small">Web Maker</Title>
        </ContentContainer>
        <ContentContainer className="k-container">
          <Parallax offsetYMin={-10} offsetYMax={10} className="k k-black">
            <img
              // id="kBlack"
              // className="k k-black"
              src="./assets/img/home/k-black.svg"
              alt="K"
            />
          </Parallax>
          <Parallax
            offsetYMax={10}
            offsetYMin={-20}
            offsetXMax={6}
            offsetXMin={0}
            slowerScrollRate
            className="k k-gradient"
          >
            <img
              // id="kGradient"
              // className="k k-gradient"
              src="./assets/img/home/k-gradient.svg"
              alt="K"
            />
          </Parallax>
        </ContentContainer>
        {/* <Description>
          <strong>React Static</strong> is a popular boilerplate for building
          single-page applications and static web sites with React.
        </Description>
        <p>
          <Button href="/getting-started">Get Started</Button>
        </p> */}
      </Container>
    );
  }
}

export default Hero;
