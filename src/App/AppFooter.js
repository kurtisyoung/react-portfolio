/* @flow */

import React from 'react';
import styled from 'styled-components';

const KURTIS_URL = 'https://github.com/kurtisyoung/react-portfolio';
const LICENSE_URL =
  'https://github.com/kriasoft/react-static-boilerplate/blob/master/LICENSE.txt';

const Footer = styled.div`
  padding: 24px 0;
  color: #000;
  background-color: #fff;
  position: relative;
`;

const Copyright = styled.span`padding-right: 0.5em;`;

const Separator = styled.span`
  padding-right: 0.5em;
  padding-left: 0.5em;
`;

const ExtLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: #000;
    text-decoration: none;
    transition: 300ms ease;
    opacity: 1;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  a {
    text-decoration: none;
    color: #000;
    transition: 300ms ease;
    opaciyt: 1;
    &:hover {
      opacity: 0.8;
    }
  }
  li {
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`;

const Rectangle = styled.div`
  width: 25px;
  position: absolute;
  left: 0;
  &.black {
    top: 0;
    height: 25px;
    background-color: #000;
  }
  &.gradient {
    top: -30px;
    height: 170px;
    background: linear-gradient(-134deg, #3FDFA4 0%, #3E45B9 100%);
  }
`;


class AppFooter extends React.Component {
  render() {
    return (
      <Footer className="container">
        <Rectangle className="gradient"></Rectangle>
        <LinkList>
          <li><a href="mailto:kurtiscyoung@gmail.com">kurtiscyoung@gmail.com</a></li>
          <li><a href="https://github.com/kurtisyoung" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/kcyoung1/" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/w_areyoung/" target="_blank">Instagram</a></li>
        </LinkList>
        <Copyright css="padding-right: 0.5em">&copy; 2018</Copyright>
        <ExtLink href={KURTIS_URL}>created by Kurtis Young</ExtLink>
        {/* <Separator>|</Separator>
        <ExtLink href={LICENSE_URL}></ExtLink> */}
      </Footer>
    );
  }
}

export default AppFooter;
