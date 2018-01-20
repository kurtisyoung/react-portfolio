/* @flow */

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  position: relative;
  height: 235px;
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 150px;
    margin-bottom: 120px;
  }
`;

const About = styled.div`
  text-align: center;
  p {
    max-width: 560px;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    letter-spacing: 0.5px;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
  span {
    font-style: italic;
    margin-top: 10px;
  }
`;

const RecGradient = styled.div`
  height: 325px;
  width: 50px;
  position: absolute;
  z-index: 1;
  top: 154px;
  left: 0;
  background: linear-gradient(-134deg, #3fdfa4 0%, #3e45b9 100%);
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [
        '“In life and business, there are two cardinal sins. The first is to act without thought and the second is not to act at all.” - Carl Icahn',
        '“The highest form of ignorance is when you reject something you know nothing about.” - Sadhguru',
        `“You miss 100% of the shots you don't take.” ― Wayne Gretzky - Michael Scott`,
        `“If Internet Explorer is brave enough to ask to be your default browser, you're brave enough to follow your dreams.” - Apple Genius`,
      ],
    };
  }

  render() {
    let randomQuote = Math.floor(Math.random() * 4);

    return (
      <AboutContainer className="container">
        <RecGradient />
        <About>
          <p>{this.state.quote[randomQuote]}</p>
        </About>
      </AboutContainer>
    );
  }
}

export default AboutComponent;
