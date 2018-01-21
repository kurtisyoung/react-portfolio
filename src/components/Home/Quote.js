import React, { Component } from 'react'
import styled from 'styled-components'

const QuoteContainer = styled.div`
  height: 235px;
  margin-top: 100px;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 15%;
    margin-bottom: 120px;
  }
  .container {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Quote = styled.div`
  text-align: center;
  p {
    max-width: 600px;
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
`
const RecBlack = styled.div`
  height: 150%;
  width: 50px;
  background-color: #000;
  position: absolute;
  top: -100%;
  left: 0;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

const RecGradient = styled.div`
  height: 160%;
  width: 50px;
  position: absolute;
  z-index: 1;
  bottom: -106%;
  left: 0;
  background: linear-gradient(-134deg, #3fdfa4 0%, #3e45b9 100%);
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

export default class QuoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [
        '"In life and business, there are two cardinal sins. The first is to act without thought and the second is not to act at all." <br> - Carl Icahn',
        '"The highest form of ignorance is when you reject something you know nothing about." <br> - Sadhguru',
        `“You miss 100% of the shots you don't take.” <br> - Wayne Gretzky <br> - Michael Scott`,
        `"If Internet Explorer is brave enough to ask to be your default browser, you're brave enough to follow your dreams."  <br> - Apple Genius`,
        `"Nothing of me is original. I am the combined efforts of everyone I've every known." <br> - Chuck Palahniuk`,
      ],
    }
  }

  render() {
    let randomQuote = Math.floor(Math.random() * 5);

    return (
      <QuoteContainer>
        <div className="container">
          <RecBlack />
          <RecGradient />
          <Quote>
            <p dangerouslySetInnerHTML={{ __html: this.state.quote[randomQuote] }}/>
          </Quote>
        </div>
      </QuoteContainer>
    );
  }
}
