import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import styled from 'styled-components'
import * as counterActions from '../redux/actions/counter'

import Button from 'components/Button'

const Wrapper = styled.div``

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  handleClickIncrement() {
    this.props.increment()
  }

  handleClickDecrement() {
    this.props.decrement()
  }

  handleClickReset() {
    this.props.reset()
  }

  render() {
    return (
      <Wrapper>
        <p>{this.props.count}</p>
        <Button handleClick={this.handleClickIncrement.bind(this)}>
          Increment
        </Button>
        <Button handleClick={this.handleClickDecrement.bind(this)}>
          Decrement
        </Button>
        <Button handleClick={this.handleClickReset.bind(this)}>Reset</Button>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment: counterActions.increment,
      decrement: counterActions.decrement,
      reset: counterActions.reset,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
