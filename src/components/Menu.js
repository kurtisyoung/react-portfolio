import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-static'
import styled from 'styled-components'

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
  top: 0;
  /* transform: translateY(-50%); */
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
  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    font-size: 20px;
    letter-spacing: 1px;
    transition: 300ms ease;
    font-family: 'Montserrat', sans-serif;
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
      font-size: 30px;
    }
  }
  &.main {
    a {
      &.active {
        font-size: 25px;
        font-weight: 700;
        display: inline-block;
        background: #3fdfa4;
        background: -webkit-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
        background: -o-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
        background: -moz-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
        background: linear-gradient(to right, #3fdfa4 0%, #3e45b9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (min-width: 768px) {
          font-size: 40px;
        }
      }
      @media (min-width: 1024px) {
        &:hover {
          font-size: 25px;
          font-weight: 700;
          display: inline-block;
          background: #3fdfa4;
          background: -webkit-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
          background: -o-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
          background: -moz-linear-gradient(right, #3fdfa4 0%, #3e45b9 100%);
          background: linear-gradient(to right, #3fdfa4 0%, #3e45b9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          @media (min-width: 768px) {
            font-size: 40px;
          }
        }
      }
    }
    li {
      margin-bottom: 10px;
    }
  }
  &.external {
    a {
      font-size: 16px !important;
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
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/juneau',
          name: 'Juneau By Amacon',
        },
        {
          link: '/landmark',
          name: 'Landmark',
        },
        {
          link: '/gryphon',
          name: 'Gryphon Development',
        },
        {
          link: '/elenore',
          name: 'Elenore On Fifth',
        },
        {
          link: '/salt-digital',
          name: 'Salt Digital',
        },
        {
          link: '/mccoll',
          name: 'McColl Therapy',
        },
      ],
      externalLinks: [
        {
          link: 'https://github.com/kurtisyoung',
          name: 'Github',
        },
        {
          link: 'https://codepen.io/kurtisyoung/',
          name: 'Codepen',
        },
        {
          link: 'https://www.linkedin.com/in/kcyoung1/',
          name: 'LinkedIn',
        },
      ],
    }
  }
  render() {
    const arrayList = this.state.menuList.map((item, index) => (
      <li key={index}>
        <NavLink
          exact
          onClick={this.props.closeMenu}
          to={item.link}
          activeClassName="active"
          >
          {item.name}
        </NavLink>
      </li>
    ))

    const externalArray = this.state.externalLinks.map((item, index) => (
      <li key={index}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </li>
    ))
    return (
      <MenuContainer className={this.props.active}>
        <Rectangle className="gradient" />
        <MenuList className="main">{arrayList}</MenuList>

        <MenuList className="external">
          <li>
            <a href="mailto:kurtiscyoung@gmail.com">kurtiscyoung@gmail.com</a>
          </li>
          {externalArray}
        </MenuList>
      </MenuContainer>
    );
  }
}

Menu.PropTypes = {
  active: PropTypes.func,
  closeMenu: PropTypes.func,
}

export default Menu