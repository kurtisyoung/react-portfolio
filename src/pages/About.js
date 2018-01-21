import React, { Component } from 'react'
import styled from 'styled-components'

import CounterRedux from 'components/CounterRedux'
import Counter from 'components/Counter'

const AboutWrapper = styled.main``

export default class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <h1>Counter Simple</h1>
        <Counter />
        <h1>Counter Redux</h1>
        <CounterRedux />
      </AboutWrapper>
    )
  }
}
