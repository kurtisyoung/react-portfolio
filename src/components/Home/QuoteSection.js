import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import styled from 'styled-components';
import QuoteText from '../QuoteText';

const QuoteContainer = styled.div`
  height: 235px;
  margin-top: 180px;
  margin-bottom: 100px;
  width: 100%;
  @media (min-width: 992px) {
    margin-top: 15%;
    margin-bottom: 200px;
  }
`

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quote = styled.div`
  text-align: center;
  position: relative;
  z-index: 10;
  font-size: 18px;
  max-width: 600px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 22px;
    max-width: 650px;
  }
  @media (min-width: 992px) {
    font-size: 30px;
    max-width: 750px;
  }
  p {
    width: 100%;
    margin: 0 auto;
    text-shadow: 2px 2px 0 #FFF;
    position: relative;
  }
`
const CTA = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-family: var(--font-title);
  font-weight: 900;
  color: rgba(0,0,0, 0.3);
`;

const RecBlack = styled.div`
  height: 150%;
  width: 50px;
  background-color: var(--color-primary);
  position: absolute;
  top: -10%;
  left: 17px;
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
  background-color: var(--color-secondary);
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

const QuoteSection = ({ quotes }) => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * quotes.length));

  const handleClick = () => {
    setRandomNumber(Math.floor(Math.random() * quotes.length))
  }
  return (
    <QuoteContainer>
      <Container className="container">
        <RecBlack />
        <RecGradient />
        <Quote onClick={handleClick}>
          <ReactCursorPosition>
            <QuoteText
              quotes={quotes[randomNumber]}
            />
          </ReactCursorPosition>
          <CTA>Click The Quote</CTA>
        </Quote>
      </Container>
    </QuoteContainer>
  )
}

export default QuoteSection;