import React, { Component } from 'react'
import Menu from '../Menu'
import  {
  HeaderContainer,
  Hamburger,
  StyledSection,
  Row,
  TitleLink,
} from './StyledHeader'

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false,
    }
  }
  toggleMenu () {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  closeMenu () {
    this.setState({ active: false })
  }

  render () {
    return (
      <HeaderContainer>
        <Row>
          <StyledSection start="true">
            <TitleLink 
              onClick={this.closeMenu.bind(this)}
              to="/"
            >
              Kurtis Young
            </TitleLink>
          </StyledSection>
          <StyledSection end="true">
            <Hamburger
              className={this.state.active ? 'active' : null}
              onClick={this.toggleMenu.bind(this)}>
              <span />
              <span />
              <span />
            </Hamburger>
          </StyledSection>
        </Row>
        <Menu
          active={this.state.active}
          closeMenu={this.closeMenu.bind(this)}
        />
      </HeaderContainer>
    )
  }
}
