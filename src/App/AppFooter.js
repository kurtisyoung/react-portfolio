/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';

const KURTIS_URL = 'https://github.com/kurtisyoung/react-portfolio';
const LICENSE_URL =
  'https://github.com/kriasoft/react-static-boilerplate/blob/master/LICENSE.txt';

const Footer = styled.div`
  padding: 24px;
  color: #000;
  background-color: #fff;
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
  }

  &:hover {
    text-decoration: underline;
  }
`;

class AppFooter extends React.Component {
  render() {
    return (
      <Footer>
        <Copyright css="padding-right: 0.5em">&copy; 2018</Copyright>
        <ExtLink href={KURTIS_URL}>created by Kurtis Young</ExtLink>
        {/* <Separator>|</Separator>
        <ExtLink href={LICENSE_URL}></ExtLink> */}
      </Footer>
    );
  }
}

export default AppFooter;
