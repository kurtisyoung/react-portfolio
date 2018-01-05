/* @flow */

import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  position: relative;
  height: 30vh;
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 150px;
  }
`;

const Quote = styled.div`
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
  top: 34px;
  left: 0;
  background: linear-gradient(-134deg, #3FDFA4 0%, #3E45B9 100%);
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

class QuoteComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: [
        '“In life and business, there are two cardinal sins. The first is to act without thought and the second is not to act at all.” - Carl Icahn',
        '“The highest form of ignorance is when you reject something you know nothing about.” - Sadhguru',
        '“The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.” ― Confucius',
        `“If Internet Explorer is brave enough to ask to be your default browser, you're brave enough to ask that girl out” - Microsoft`,
      ],
    }
  }

  render() {
    let randomQuote = Math.floor(Math.random() * 4)

    return (
      <QuoteContainer className="container">
        <RecGradient></RecGradient>
        <Quote>
          <p>{this.state.quote[randomQuote]}</p>
        </Quote>
      </QuoteContainer>
    )
  }
}

export default QuoteComponent