/* @flow */

import React from 'react';
import styled from 'styled-components';
import { graphql, createFragmentContainer } from 'react-relay';

import Link from '../Components/Link';
import AppLogo from './AppLogo';
import type { AppToolbar_me } from './__generated__/AppToolbar_me.graphql';

const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  color: #000;
  flex-direction: column;
  background-color: #fff;
  justify-content: space-between;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 959px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (max-width: 599px) {
    min-height: 56px;
  }
`;

const Section = styled.section`
  z-index: 1;
  display: inline-flex;
  min-width: 0;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: ${props =>
    props.start ? 'flex-start' : props.end ? 'flex-end' : 'center'};
  order: ${props => (props.start ? -1 : props.end ? 1 : null)};
`;

const TitleLink = styled(Link)`
  z-index: 1;
  display: inline-flex;
  padding: 16px 0;
  margin: 0;
  margin-left: 24px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #00d8ff;
  text-decoration: none;
  text-overflow: ellipsis;
  letter-spacing: 0.0625em;
  white-space: nowrap;
  align-self: center;
  align-items: center;

  @media (max-width: 599px) {
    margin-left: 16px;
  }

  &.title:active,
  &.title:hover,
  &.title:visited {
    color: #00d8ff;
  }
`;

const Logo = styled(AppLogo)`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

const NavLink = styled(Link)`
  padding-right: 8px;
  padding-left: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavLinkLast = styled(NavLink)`
  margin-right: 24px;
  @media (max-width: 599px) {
    margin-right: 16px;
  }
`;

class AppToolbar extends React.Component {
  props: {
    me: AppToolbar_me,
    hero: React.Element<*>,
  };

  render() {
    return (
      <Header>
        <Row>
          <Section start>
            <TitleLink href="/">
              {/* <Logo /> */}
              Kurtis Young
            </TitleLink>
          </Section>
          <Section end>
            <NavLink href="/getting-started">Get Started</NavLink>
            <NavLinkLast href="/about">About</NavLinkLast>
          </Section>
        </Row>
        {this.props.hero &&
          React.cloneElement(this.props.hero, {
            style: {
              maxWidth: '90%',
              margin: '0 auto',
            },
          })}
      </Header>
    );
  }
}

export default createFragmentContainer(
  AppToolbar,
  graphql`
    fragment AppToolbar_me on User {
      displayName
    }
  `,
);
