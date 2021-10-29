import React from 'react';
import styled from 'styled-components';

const QuoteWrapper = styled.div`
  transition: 200ms ease;
  padding: '30px 0';
`;
const StyledQuoteText = styled.div``;
const QuotationMark = styled.div`
  font-size: 80px;
  height: 55px;
  position: relative;
  color: var(--color-primary);
`;
const Author = styled.div`
  position: relative;
  display: inline-block;
  span {
    font-family: var(--font-title);
    font-size: 1.8em;
    font-weight: 900;
    margin-top: 10px;
    color: var(--color-primary);
    @media (min-width: 768px) {
      white-space: nowrap;
    }
  }
`;
const Colour = styled.span`
  display: inline-block;
  transition: color 300ms ease;
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 100ms linear;
  transform: translate3d(0,0,0);
`;

const QuoteText = ({
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
}) => {

  return (
    <QuoteWrapper>
      <StyledQuoteText>
        <QuotationMark>“</QuotationMark>
        <p>{quote}</p>
        <QuotationMark>”</QuotationMark>
      </StyledQuoteText>
      <Author>
        <Colour style={{ color }}>{author}</Colour>
        <Shadow style={{ transform: `translate3d(${(x / 10) - 30}px,${(y / 10) - 10}px,0)`}}>{author}</Shadow>
      </Author>
    </QuoteWrapper>
  )
}

export default QuoteText;