import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-static'
import styled from 'styled-components'
import menuLinks from '../data/menuLinks'

const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: 500ms ease;
  background: var(--color-primary);
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
`

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
    /* background: linear-gradient(-134deg, #3fdfa4 0%, #3e45b9 100%); */
    /* background-color: var(--color-secondary); */
    background: linear-gradient(90deg, var(--color-bg) var(--dot-size), transparent 1%) center, linear-gradient(var(--color-bg) var(--dot-size), transparent 1%) center, var(--color-primary);
    background-size: var(--dot-space) var(--dot-space);
  }
`

const MenuList = styled.ul`
  padding-left: 50px;
  list-style: none;
  @media (min-width: 768px) {
    padding-left: 29%;
  }
  a {
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
  }
  &.main {
    a {
      &.active {
        font-size: 20px;
        font-weight: 700;
        display: inline-block;
        background: var(--color-secondary);
        /* background: -webkit-linear-gradient(right, var(--color-secondary) 0%, #3e45b9 100%);
        background: -o-linear-gradient(right, var(--color-secondary) 0%, #3e45b9 100%);
        background: -moz-linear-gradient(right, var(--color-secondary) 0%, #3e45b9 100%);
        background: linear-gradient(to right, var(--color-secondary) 0%, #3e45b9 100%); */
        background: -webkit-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        background: -o-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        background: -moz-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        background: linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (min-width: 768px) {
          font-size: 30px;
        }
      }
      @media (min-width: 1024px) {
        &:hover {
          font-size: 20px;
          font-weight: 700;
          display: inline-block;
          background: var(--color-secondary);
          /* background: -webkit-linear-gradient(right, var(--color-secondary) 0%, #3e45b9 100%);
          background: -o-linear-gradient(right, var(--color-secondary) 0%, #3e45b9 100%);
          background: -moz-linear-gradient(right, var(--color-secondary) 0%, #3e45b9 100%);
          background: linear-gradient(to right, var(--color-secondary) 0%, #3e45b9 100%); */
          background: -webkit-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          background: -o-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          background: -moz-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          background: linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          @media (min-width: 768px) {
            font-size: 30px;
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
`

class Menu extends Component {
  render () {
    const arrayList = menuLinks.menuList.map((item, index) => (
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

    const externalArray = menuLinks.externalLinks.map((item, index) => (
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
d'
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

Menu.propTypes = {
  active: PropTypes.bool,
  closeMenu: PropTypes.func,
}

export default Menu