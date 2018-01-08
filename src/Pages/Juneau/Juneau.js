/* @flow */

import React from 'react'
import styled from 'styled-components'

import Template from '../../Components/ProjectTemplate'

class JuneauPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Juneau By Amacon',
      banner: './assets/img/juneau/banner.jpg',
      paragraph: 'Juneau is a residential development by Amacon and MLA in the heart of Burnaby. As lead developer, my role involved project management and web development.'
    }
  }
  render() {
    return (
      <section>
        <Template
          title={this.state.title}
          banner={this.state.banner}
          paragraph={this.state.paragraph}></Template>
      </section>
    )
  }
}

export default JuneauPage
