/* @flow */

import React from 'react';
import styled from 'styled-components';

import Link from '../Components/Link';

const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: 500ms ease;
  background: #000;
  position: fixed;
  z-index: 888;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  &.true {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const Rectangle = styled.div`
  width: 15px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  @media (min-width: 768px) {
    width: 25%;
  }
  &.gradient {
    background: linear-gradient(-134deg, #3fdfa4 0%, #3e45b9 100%);
  }
`;

const MenuList = styled.ul`
  padding-left: 50px;
  @media (min-width: 768px) {
    padding-left: 29%;
  }
  &.main {
    li {
      margin-bottom: 10px;
    }
  }
  &.external {
    a {
      font-size: 16px;
    }
    li {
      &:first-of-type {
        margin-bottom: 20px;
      }
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    font-size: 20px;
    letter-spacing: 1px;
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
    &:hover {
      &:before {
        width: 100%;
      }
    }
    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }
`;

class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/juneau-by-amacon',
          name: 'Juneau By Amacon',
        },
        {
          link: '/landmark',
          name: 'Landmark',
        },
        {
          link: '/gryphon-developments',
          name: 'Gryphon Developments',
        },
        {
          link: '/elenore-on-fifth',
          name: 'Elenore On Fifth',
        },
        {
          link: '/salt-digital',
          name: 'Salt Digital',
        },
        {
          link: '/mccoll-therapy',
          name: 'McColl Therapy',
        },
      ],
    };
  }
  props: {
    active: Function,
    closeMenu: Function,
  };
  render() {
    const list = this.state.menuList;
    const arrayList = list.map((item, index) => (
      <li key={index}>
        <Link onClick={this.props.closeMenu} href={item.link}>
          {item.name}
        </Link>
      </li>
    ));
    return (
      <MenuContainer className={this.props.active}>
        <Rectangle className="gradient" />
        <MenuList className="main">{arrayList}</MenuList>

        <MenuList className="external">
          <li>
            <a href="mailto:kurtiscyoung@gmail.com">kurtiscyoung@gmail.com</a>
          </li>
          <li>
            <a
              href="https://github.com/kurtisyoung"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kcyoung1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/w_areyoung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </MenuList>
      </MenuContainer>
    );
  }
}

export default AppMenu;
