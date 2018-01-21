import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import styled from 'styled-components'

const ButtonWrapper = styled.span`
  & > a {
    display: inline-block;
    padding: 10px 25px;
    background: #fff;
    color: #111;
    text-decoration: none;
  }
`

class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick()
  }

  render() {
    return (
      <ButtonWrapper>
        {this.props.link ? (
          <Link
            className="active"
            background={this.props.background}
            onClick={this.handleClick}
            to={this.props.link}
          >
            {this.props.children}
          </Link>
        ) : (
          <a background={this.props.background} onClick={this.handleClick}>
            {this.props.children}
          </a>
        )}
      </ButtonWrapper>
    )
  }
}

Button.propTypes = {
  handleClick: PropTypes.func,
  background: PropTypes.string,
}

Button.defaultProps = {
  background: '#fff',
  handleClick: () => {},
}

export default Button
