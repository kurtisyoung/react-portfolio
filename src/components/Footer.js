import React, { Component } from 'react'
// import { Link } from 'react-static'
import styled from 'styled-components'

const KURTIS_URL = 'https://github.com/kurtisyoung/react-portfolio'
// const LICENSE_URL =
//   'https://github.com/kriasoft/react-static-boilerplate/blob/master/LICENSE.txt'

const FooterContainer = styled.div`
  padding: 24px 0;
  color: var(--color-primary);
  position: relative;
`

const Copyright = styled.span`padding-right: 0.5em;`;

// const Separator = styled.span`
//   padding-right: 0.5em;
//   padding-left: 0.5em;
// `

const ExtLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: var(--color-primary);
    text-decoration: none;
    transition: 300ms ease;
    opacity: 1;
  }
`

const LinkList = styled.ul`
  list-style: none;
  a {
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
  }
  li {
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`

const Rectangle = styled.div`
  width: 25px;
  position: absolute;
  left: 0;
  &.black {
    top: 0;
    height: 25px;
    background-color: var(--color-primary);
  }
  &.gradient {
    top: -46px;
    height: 200px;
    background: linear-gradient(-134deg, #3FDFA4 0%, #3E45B9 100%);
  }
`


export default class Footer extends Component {
  render() {
    return (
      <FooterContainer className="container">
        <Rectangle className="gradient" />
        <LinkList>
          <li><a href="mailto:kurtiscyoung@gmail.com">kurtiscyoung@gmail.com</a></li>
          <li><a href="https://github.com/kurtisyoung" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://codepen.io/kurtisyoung/" target="_blank" rel="noopener noreferrer">Codepen</a></li>
          <li><a href="https://www.linkedin.com/in/kurtisyoung1/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </LinkList>
        <Copyright css="padding-right: 0.5em">&copy; 2020</Copyright>
        <ExtLink href={KURTIS_URL} target="_blank" rel="noopener noreferrer">created by Kurtis Young</ExtLink>
        {/* <Separator>|</Separator>
        <ExtLink href={LICENSE_URL}></ExtLink> */}
      </FooterContainer>
    )
  }
}
