import styled from 'styled-components'

const QuoteContainer = styled.div`
  height: 235px;
  margin-top: 180px;
  margin-bottom: 100px;
  width: 100%;
  @media (min-width: 992px) {
    margin-top: 15%;
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
  .quote-wrapper {
    transition: 200ms ease;
  }
  .top-mark, .bottom-mark {
    font-size: 80px;
    height: 55px;
    position: relative;
    color: var(--color-primary);
  }
  .author {
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
  }
  .cta {
    font-size: 14px;
    text-transform: uppercase;
    font-family: var(--font-title);
    font-weight: 900;
    color: rgba(0,0,0, 0.3);
  }
  .color {
    display: inline-block;
    transition: color 300ms ease;
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

export {
  QuoteContainer,
  RecGradient,
  RecBlack,
  Quote,
}
