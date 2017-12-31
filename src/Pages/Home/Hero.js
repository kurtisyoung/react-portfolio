/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../../Components/Link';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 40px;
  letter-spacing: 1px;
  margin: 0;
`;
const Title2 = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 35px;
  letter-spacing: 1px;
  margin: 0;
`;
const Title3 = styled.h3`
  font-family: 'Source Sans Pro', sans-serif;
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
        <Title>Web Developer</Title>
        <Title2>UX/UI Designer</Title2>
        <Title3>Creator</Title3>
        <Description>
          <strong>React Static</strong> is a popular boilerplate for building
          single-page applications and static web sites with React.
        </Description>
        <p>
          <Button href="/getting-started">Get Started</Button>
        </p>
      </Container>
    );
  }
}

export default Hero;
