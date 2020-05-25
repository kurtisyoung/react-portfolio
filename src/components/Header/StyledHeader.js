import styled from 'styled-components'
import { Link } from 'react-static'

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  color: var(--color-primary);
  flex-direction: column;
  background-color: #fff;
  justify-content: space-between;
`

const Row = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  margin: 0 auto;
  padding: 0 5%;
  top: 0;
  left: 0;
  display: flex;
  height: 64px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 959px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (max-width: 599px) {
    min-height: 56px;
  }
`

const StyledSection = styled.section`
  z-index: 1;
  display: inline-flex;
  min-width: 0;
  height: 100%;
  flex: ${props => props.start ? '1' : props.end ? '0' : null};
  align-items: center;
  justify-content: ${props =>
    props.start ? 'flex-start' : props.end ? 'flex-end' : 'center'};
  order: ${props => (props.start ? -1 : props.end ? 1 : null)};
`

const TitleLink = styled(Link)`
  z-index: 1;
  display: inline-flex;
  padding: 16px 0;
  margin: 0;
  overflow: hidden;
  font-family: var(--font-title);
  font-weight: 900;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: var(--color-primary);
  text-shadow: 2px 2px 0 #FFF;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-self: center;
  align-items: center;
`

const Hamburger = styled.div`
  height: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  span {
    height: 4px;
    width: 35px;
    background: var(--color-primary);
    transition: 300ms ease;
    box-shadow: 2px 2px 0 0 #FFF;
    &:nth-of-type(2) {
      width: 30px;
      opacity: 1;
    }
    &:last-of-type {
      width: 20px;
    }
  }
  @media (min-width: 1024px) {
    &:hover {
      span {
        width: 35px;
      }
    }
  }
  &.active {
    span {
      box-shadow: none;
      background: #FFF;
      &:first-of-type {
        transform: translate(0, 10px) rotate(-45deg);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:last-of-type {
        width: 35px;
        transform: translate(0, -5px) rotate(45deg);
      }
    }
  }
`
export {
  HeaderContainer,
  Hamburger,
  StyledSection,
  Row,
  TitleLink,
}
