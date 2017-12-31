/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../../Components/Link';

const Container = styled.div`padding: 1em 1em 2em;`;

const Title = styled.h2`
  font-family: 'Source Sans Pro', monospace;
  font-size: 40px;
  letter-spacing: 1px;
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
        <Title>My name is Kurtis Young. <br/> I am a Front End Developer.</Title>
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
