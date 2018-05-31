import React, { Component } from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled from 'styled-components'

const QuoteContainer = styled.div`
  height: 235px;
  margin-top: 180px;
  margin-bottom: 100px;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 25%;
    margin-bottom: 200px;
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
  position: relative;
  z-index: 10;
  font-size: 25px;
  max-width: 600px;
  @media (min-width: 768px) {
    font-size: 40px;
    max-width: 850px;
  }
  /* @media (min-width: 1024px) {
    &:hover {
      span {
        text-shadow: -5px -5px 0 #000;
      }
    }
  } */
  p {
    width: 100%;
    margin: 0 auto;
    letter-spacing: 0.5px;
    text-shadow: 2px 2px 0 #FFF;
    /* transform: rotate(90deg); */
  }
  .author {
    position: relative;
    display: inline-block;
  }
  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 10px;
    color: #000;
    @media (min-width: 768px) {
      white-space: nowrap;
    }
  }
  .gradient {
    transition: text-shadow 300ms ease;
    /* text-shadow: 5px 5px 0 #000; */
    display: inline-block;
    background: #3fdfa4;
    background: -webkit-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
    background: -o-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
    background: -moz-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
    background: linear-gradient(to right, #3fdfa4 0%, #3e45b9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 300ms linear;
    transform: translate3d(0,0,0);
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

const QuoteText = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 0,
      y = 0
    } = {},
    quotes: {
      quote = '',
      author = '',
    } = {},
  } = props;

  return (
    <div className="quote-text" style={{ color: 'black' }}>
      <p>{props.quotes.quote}</p>
      <div className="author">
        <span className="gradient">{props.quotes.author}</span>
        <span className="shadow" style={{ transform: `translate3d(${(x / 10) - 30}px,${(y / 10) - 10}px,0)`}}>{props.quotes.author}</span>
      </div>
      {/* {`x: ${x}`}<br />
      {`y: ${y}`}<br />
      {`width:: ${width}`}<br />
      {`height: ${height}`}<br />
      {`isActive: ${isActive}`}<br />
      {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
      {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
      {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`} */}
    </div>
  );
};

export default class QuoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: `“The highest form of ignorance is when you reject something you know nothing about.”`,
          author: `- Carl Icahn`
        },
        {
          quote: `“The highest form of ignorance is when you reject something you know nothing about.”`,
          author: `- Sadhguru`
        },
        {
          quote: `“If Internet Explorer is brave enough to ask to be your default browser, you're brave enough to follow your dreams.”`,
          author: '- Apple Genius'
        },
        {
          quote: `“Nothing of me is original. I am the combined efforts of everyone I've ever known.”`,
          author: `- Chuck Palahniuk`
        },
        {
          quote: `“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”`,
          author: `- Aristotle`
        },
      ],
    }
  }

  render() {
    let randomQuote = Math.floor(Math.random() * 6);

    return (
      <QuoteContainer>
        <div className="container">
          <RecBlack />
          <RecGradient />
          <Quote>
            <ReactCursorPosition>
              <QuoteText
                quotes={this.state.quotes[randomQuote]}
              />
            </ReactCursorPosition>
          </Quote>
        </div>
      </QuoteContainer>
    );
  }
}
