import styled from 'styled-components'
import { NavLink } from 'react-static'

const StyledLink = styled.a`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-primary);
    transition: 300ms ease;
  }
  @media (min-width: 1024px) {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`

const StyledNavLink = styled(NavLink)`
  color: #fff;
    text-decoration: none;
    position: relative;
    font-size: 12px;
    transition: 300ms ease;
    font-family: var(--font-title);
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: #fff;
      transition: 300ms ease;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
    }
`

export {
  StyledLink,
  StyledNavLink,
}
