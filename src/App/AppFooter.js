/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';

const KRIASOFT_URL = 'https://www.kriasoft.com/';
const LICENSE_URL =
  'https://github.com/kriasoft/react-static-boilerplate/blob/master/LICENSE.txt';

const Footer = styled.div`
  padding: 24px;
  color: rgba(255, 255, 255, 0.4);
  background-color: black;
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
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

class AppFooter extends React.Component {
  render() {
    return (
      <Footer>
        <Copyright css="padding-right: 0.5em">&copy; 2017</Copyright>
        <ExtLink href={KRIASOFT_URL}>Created by Kurtis Young</ExtLink>
        {/* <Separator>|</Separator>
        <ExtLink href={LICENSE_URL}></ExtLink> */}
      </Footer>
    );
  }
}

export default AppFooter;
