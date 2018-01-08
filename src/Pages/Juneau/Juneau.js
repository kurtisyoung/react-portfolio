/* @flow */

import React from 'react'
import styled from 'styled-components'

import Template from '../../Components/ProjectTemplate'

class JuneauPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Juneau By Amacon',
      banner: './assets/img/juneau/banner.jpg'
    }
  }
  render() {
    return (
      <section>
        <Template
          title={this.state.title}
          banner={this.state.banner}></Template>
      </section>
    )
  }
}

export default JuneauPage
