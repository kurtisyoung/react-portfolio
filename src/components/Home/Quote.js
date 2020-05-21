import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled from 'styled-components'
import quotes from '../../data/quotes'

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
  font-size: 20px;
  max-width: 600px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 35px;
    max-width: 850px;
  }
  p {
    width: 100%;
    margin: 0 auto;
    letter-spacing: 0.5px;
    text-shadow: 2px 2px 0 #FFF;
    position: relative;
  }
  .quote-wrapper {
    transition: 200ms ease;
  }
  .top-mark, .bottom-mark {
    font-size: 80px;
    height: 55px;
    position: relative;
    color: #000;
  }
  .author {
    position: relative;
    display: inline-block;
    span {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.8em;
      font-weight: 900;
      margin-top: 10px;
      color: #000;
      @media (min-width: 768px) {
        white-space: nowrap;
      }
    }
  }
  .cta {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(0,0,0, 0.3);
  }
  .color {
    /* text-shadow: 5px 5px 0 #000; */
    display: inline-block;
    transition: color 300ms ease;
    /* background: #3fdfa4;
    background: -webkit-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
    background: -o-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
    background: -moz-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
    background: linear-gradient(to right, #3fdfa4 0%, #3e45b9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 100ms linear;
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
  height: 193%;
  width: 50px;
  position: absolute;
  z-index: 1;
  bottom: -136%;
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
      color = '',
    } = {},
  } = props

  return (
    <div className="quote-wrapper" style={{ padding: '30px 0'}}>
      <div className="quote-text">
        <div className="top-mark">“</div>
        <p>{props.quotes.quote}</p>
        <div className="bottom-mark">”</div>
      </div>
      <div className="author">
        <span className="color" style={{ color: props.quotes.color }}>{props.quotes.author}</span>
        <span className="shadow" style={{ transform: `translate3d(${(x / 10) - 30}px,${(y / 10) - 10}px,0)`}}>{props.quotes.author}</span>
      </div>
    </div>
  )
}


export default class QuoteComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * quotes.length),
    }
  }

  handleClick = () => {
    this.setState({ randomNumber: Math.floor(Math.random() * quotes.length)})
  }

  render () {
    return (
      <QuoteContainer>
        <div className="container">
          <RecBlack />
          <RecGradient />
          <Quote onClick={this.handleClick}>
            <ReactCursorPosition>
              <QuoteText
                quotes={quotes[this.state.randomNumber]}
              />
            </ReactCursorPosition>
            <span className="cta">Click The Quote</span>
          </Quote>
        </div>
      </QuoteContainer>
    )
  }
}
