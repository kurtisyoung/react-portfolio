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
      paragraph: 'Juneau is a residential development built by Amacon in the heart of Burnaby. Lorem Ipsum blah blah blah.',
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Amacon, MLA',
        },
        {
          title: 'Year',
          content: '2017',
        },
        {
          title: 'Role',
          content: 'Web Developer',
        },
        {
          title: 'Website',
          content: '<a href="https://amacon.com/juneau/" target="_blank" rel="noopener noreferrer">amacon.com/juneau/</a>',
        },
        {
          title: 'Tech Stack',
          content: 'VueJS, JS, HTML5, SCSS, npm, WebPack',
        },
      ]
    }
  }
  render() {
    return (
      <section>
        <Template
          title={this.state.title}
          banner={this.state.banner}
          paragraph={this.state.paragraph}
          details={this.state.details}></Template>
      </section>
    )
  }
}

export default JuneauPage
