/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../../Components/Link';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  top: 64px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;
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
    width: 50%;
    align-items: flex-start;
    text-align: left;
  }
  .k {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    width: 100%;
    @media (min-width: 768px) {
      max-width: 100%;
      left: -30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .k-gradient {
    left: 53%;
    @media (min-width: 768px) {
      left: 0;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  &.large {
    font-size: 35px;
  }
  &.medium {
    font-size: 30px;
  }
  &.small {
    font-size: 25px;
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

const RecBlack = styled.div`
  height: 325px;
  width: 50px;
  background-color: #000;
  position: absolute;
  bottom: -240px;
  left: 0;
  display: none;
  @media (min-width: 768px) {
    display: block;
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
  render() {
    return (
      <Container {...this.props}>
        <ContentContainer>
          <Title className="large">Web Developer</Title>
          <Title className="medium">UX/UI Designer</Title>
          <Title className="small">Creator</Title>
          <RecBlack/>
        </ContentContainer>
        <ContentContainer>
          <img className="k k-black" src="./assets/img/home/k-black.svg" alt="K" />
          <img className="k k-gradient" src="./assets/img/home/k-gradient.svg" alt="K" />
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
