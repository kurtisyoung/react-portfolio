import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import styled from 'styled-components'

import Button from 'components/Button'

const CounterWrapper = styled.div``

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  handleClickIncrement() {
    this.setState({ count: this.state.count + 1 })
  }

  handleClickDecrement() {
    this.setState({ count: this.state.count - 1 })
  }

  handleClickReset() {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <CounterWrapper>
        <p>{this.state.count}</p>
        <Button handleClick={this.handleClickIncrement.bind(this)}>
          Increment
        </Button>
        <Button handleClick={this.handleClickDecrement.bind(this)}>
          Decrement
        </Button>
        <Button handleClick={this.handleClickReset.bind(this)}>Reset</Button>
      </CounterWrapper>
    )
  }
}
