import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
import { arcteryxLinks, auroraLinks, bamLinks, freelanceLinks, externalLinks } from '../data/links';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-gap: 120px;
  }
`

const GridItem = styled.div``

const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: 500ms ease;
  background: var(--color-primary);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 888;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  overflow-y: scroll;
  padding-left: 50px;
  @media (min-width: 768px) {
    padding-left: 10%;
    width: 75%;
  }
  &.true {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    overflow-x: scroll;
  }
`

const MenuList = styled.ul`
  list-style: none;
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
    @media (max-width: 450px) {
      font-size: 10px;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
  &.main {
    padding-left: 0;
    a {
      &.active {
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        color: var(--color-secondary);
        @media (min-width: 768px) {
          font-size: 20px;
        }
      }
      &.active.aurora {
        color: var(--color-aurora);
      }
      &.active.arcteryx {
        color: var(--color-arcteryx);
      }
      &.active.bam {
        color: var(--color-bam);
      }
      &.active.freelance {
        color: var(--color-freelance);
      }
      @media (min-width: 1024px) {
        &:hover {
          font-size: 20px;
          font-weight: 700;
          display: inline-block;
          color: var(--color-secondary);
        }
        &.aurora:hover {
          color: var(--color-aurora);
        }
        &.arcteryx:hover {
          color: var(--color-arcteryx);
        }
        &.bam:hover {
          color: var(--color-bam);
        }
        &.freelance:hover {
          color: var(--color-freelance);
        }
      }
    }
    li {
      margin-bottom: 5px;
      @media (min-width: 768px) {
        margin-bottom: 10px;
      }
    }
  }
  &.external {
    padding: 0;
    a {
      font-size: 10px !important;
      @media (min-width: 1024px) {
        font-size: 12px !important;
        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
    li {
      &:first-of-type {
        margin-bottom: 10px;
        @media (min-width: 768px) {
          margin-bottom: 20px;
        }
      }
    }
  } 
`

const CategoryTitle = styled.h3`
  font-family: var(--font-title);
  color: #FFF;
  font-weight: bold;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  &.aurora {
    color: var(--color-aurora);
  }
  &.bam {
    color: var(--color-bam);
    margin-top: 40px;
  }
  &.freelance {
    color: var(--color-freelance);
    margin-top: 40px;
  }
  &.arcteryx {
    color: var(--color-arcteryx);
  }
`

const Menu = ({ active, closeMenu }) => {
  return (
    <MenuContainer className={active}>
      <GridContainer>
        <MenuList className="main">
          <li>
            <NavLink
              exact
              onClick={closeMenu}
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
        </MenuList>
      </GridContainer>
      
      <GridContainer>
        <GridItem>
          <CategoryTitle className="aurora">Aurora</CategoryTitle>
          <MenuList className="main">
            {auroraLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  exact
                  onClick={closeMenu}
                  to={item.link}
                  activeClassName="active"
                  className="aurora"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </MenuList>
        </GridItem>
        <GridItem>
          <CategoryTitle className="arcteryx">Arc'teryx</CategoryTitle>
          <MenuList className="main">
            {arcteryxLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  exact
                  onClick={closeMenu}
                  to={item.link}
                  activeClassName="active"
                  className="arcteryx"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </MenuList>
          <CategoryTitle className="bam">BAM</CategoryTitle>
          <MenuList className="main">
            {bamLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  exact
                  onClick={closeMenu}
                  to={item.link}
                  activeClassName="active"
                  className="bam"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </MenuList>
          <CategoryTitle className="freelance">Freelance</CategoryTitle>
          <MenuList className="main">
            {freelanceLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  exact
                  onClick={closeMenu}
                  to={item.link}
                  activeClassName="active"
                  className="freelance"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </MenuList>
        </GridItem>
      </GridContainer>
      
      <MenuList className="external">
        {externalLinks.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </MenuList>
    </MenuContainer>
  )
}

export default Menu