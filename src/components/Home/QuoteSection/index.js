import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import quotes from '../../../data/homeQuoteSection'
import {
  QuoteContainer,
  RecGradient,
  RecBlack,
  Quote,
} from './StyledQuoteSection'

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
