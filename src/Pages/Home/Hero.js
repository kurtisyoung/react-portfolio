/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../../Components/Link';

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  font-size: 40px;
  letter-spacing: 1px;
  margin: 0;
`;
const Title2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: 1px;
  margin: 0;
`;
const Title3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 1px;
  margin: 0;
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
          <Title>Web Developer</Title>
          <Title2>UX/UI Designer</Title2>
          <Title3>Creator</Title3>
        </ContentContainer>
        <ContentContainer>
          <img className="k k-black" src="./assets/img/k-black.svg" alt="K" />
          <img className="k k-gradient" src="./assets/img/k-gradient.svg" alt="K" />
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
