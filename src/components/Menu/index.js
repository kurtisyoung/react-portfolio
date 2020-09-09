import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-static'
import menuLinks from '../../data/menuLinks'
import {
  GridContainer,
  GridItem,
  CategoryTitle,
  MenuList,
  Rectangle,
  MenuContainer,
} from './StyledMenu'

class Menu extends Component {
  render () {
    const auroraArray = menuLinks.auroraList.map((item, index) => (
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

    const bamArray = menuLinks.bamList.map((item, index) => (
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

    const freelanceArray = menuLinks.freelanceList.map((item, index) => (
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
        <GridContainer>
          <MenuList className="main">
            <li>
              <NavLink
                exact
                onClick={this.props.closeMenu}
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
              {auroraArray}
            </MenuList>
          </GridItem>
          <GridItem>
            <CategoryTitle className="bam">BAM</CategoryTitle>
            <MenuList className="main">
              {bamArray}
            </MenuList>
            <CategoryTitle className="freelance">Freelance</CategoryTitle>
            <MenuList className="main">
              {freelanceArray}
            </MenuList>
          </GridItem>
        </GridContainer>
        
        <MenuList className="external">
          <li>
            <a href="mailto:hello@kurtisyoung.ca">hello@kurtisyoung.ca</a>
          </li>
          {externalArray}
        </MenuList>
      </MenuContainer>
    )
  }
}

Menu.propTypes = {
  active: PropTypes.bool,
  closeMenu: PropTypes.func,
}

export default Menu