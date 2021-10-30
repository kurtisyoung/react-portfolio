import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledLink } from '../styles/GlobalStyles'
import { externalLinks } from "../data/links"

const KURTIS_URL = 'https://github.com/kurtisyoung/react-portfolio'

const FooterContainer = styled.div`
  padding: 24px 0;
  color: var(--color-primary);
  position: relative;
`

const Copyright = styled.span`padding-right: 0.5em;`;

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
  &:hover {
    font-weight: bold;
  }
`

const LinkList = styled.ul`
  list-style: none;
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
  &.gradient {
    top: -46px;
    height: 224px;
    background-color: var(--color-secondary);
  }
`


export default class Footer extends Component {
  render() {
    return (
      <FooterContainer className="container">
        <Rectangle className="gradient" />
        <LinkList>
          {externalLinks.map(item => (
            <li key={item.name}><StyledLink href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</StyledLink></li>
          ))}
        </LinkList>
        <Copyright css="padding-right: 0.5em">&copy; 2021</Copyright>
        <ExtLink href={KURTIS_URL} target="_blank" rel="noopener noreferrer">created by Kurtis Young</ExtLink>
      </FooterContainer>
    )
  }
}
