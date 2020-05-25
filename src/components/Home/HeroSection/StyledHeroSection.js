import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  top: 64px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-height: 730px;
  justify-content: space-between;
  @media (min-width: 768px) {
    min-height: 840px;
  }
  @media (min-width: 992px) {
    min-height: 600px;
  }
  &.active {
    h1 {
      opacity: 1;
      left: 0;
    }
    p {
      opacity: 1;
      left: 0;
    }
  }
`

const StyledContentContainer = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  position: relative;
  text-align: left;
  @media (min-width: 768px) {
    min-height: 500px;
  }
  @media (min-width: 992px) {
    height: 100%;
    width: 48%;
    align-items: flex-start;
    &.k-container {
      text-align: right;
      width: 45%;
    }
  }
  .k {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 300px;
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
      max-width: 400px;
    }
    @media (min-width: 992px) {
      max-width: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      max-width: 300px;
      width: 100%;
      height: auto;
      @media (min-width: 768px) {
      max-width: 400px;
    }
      @media (min-width: 992px) {
        max-width: 100%;
      }
    }
  }
  .k-color {
    left: 53%;
    @media (min-width: 992px) {
      left: 6%;
    }
  }
`

const StyledContent = styled.p`
  font-size: 18px;
  max-width: 700px;
  position: relative;
  margin-top: 0;
  opacity: 0;
  left: 20px;
  transition: opacity 500ms ease-out, left 500ms ease-out;
  transition-delay: ${props => props.delay ? props.delay : 0}ms;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 992px) {
    font-size: 25px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
  }
`

const StyledTitle = styled.h1`
  font-family: var(--font-title);
  font-weight: 500;
  margin: 0;
  position: relative;
  opacity: 0;
  left: 20px;
  transition: opacity 500ms ease-out, left 500ms ease-out;
  color: var(--color-primary);
  &.large {
    font-size: 35px;
    font-weight: 900;
  }
  &.medium {
    font-size: 30px;
    transition-delay: 200ms;
    font-weight: bold;
  }
  &.small {
    font-size: 25px;
    transition-delay: 400ms;
  }
  @media (min-width: 768px) {
    &.large {
      font-size: 40px;
    }
    &.medium {
      font-size: 35px;
    }
    &.small {
      font-size: 30px;
    }
  }
`
const EmojiSpan = styled.span`
  position: relative;
  cursor: pointer;
  font-weight: bold;
  transition: 200ms ease;
  &:after {
    content: "😋";
    top: 0;
    position: absolute;
    opacity: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    text-shadow: 0 2px 4px rgba(0,0,0,.3);
    transition: 200ms ease-in-out;
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
  &:hover, &:active, &:focus {
    &:after {
      opacity: 1;
      transform: translate3d(-50%, -23px, 0);
      @media (min-width: 1024px) {
        transform: translate3d(-50%, -36px, 0);
      }
    }
  }
  &.hi {
    font-weight: 900;
    &:after {
      content: '👋🏼';
    }
  }
  &.van {
    &:hover, &:active, &:focus {
      color: #89C538;
    }
    &:after {
      content: '🏞';
    }
  }
  &.edm {
    &:hover, &:active, &:focus {
      color: #378DD5;
    }
    &:after {
      content: '🛣';
    }
  }
  &.oil {
    &:hover, &:active, &:focus {
      color: #fc4c02;
    }
    &:after {
      content: '🧡';
    }
  }
  &.web {
    &:hover, &:active, &:focus {
      color: red;
    }
    &:after {
      content: '🕸';
    }
  }
  &.js {
    &:hover, &:active, &:focus{
      color: #F0DB4F;
    }
    &:after {
      content: '🎉';
    }
  }
  &.bam {
    text-decoration: underline;
    &:hover, &:active, &:focus {
      color: var(--color-bam);
      text-decoration-color: var(--color-bam);
    }
    &:after {
      content: '💥';
    }
  }
  &.old {
    &:hover, &:active, &:focus{
      color: #5E5E5E;
    }
    &:after {
      content: '👴🏽';
    }
  }
  &.aurora {
    text-decoration: underline;
    &:hover, &:active, &:focus {
      color: var(--color-aurora);
      text-decoration-color: var(--color-aurora);
    }
    &:after {
      content: '🌈';
    }
  }
  &.work {
    &:hover, &:active, &:focus{
      color: var(--color-secondary);
    }
    &:after {
      content: '💻';
    }
  }
  &.quotes {
    &:hover, &:active, &:focus{
      color: #F2BF92;
    }
    &:after {
      content: ' 🖋';
    }
  }
`

export {
  StyledContainer,
  StyledContentContainer,
  StyledTitle,
  StyledContent,
  EmojiSpan,
}
