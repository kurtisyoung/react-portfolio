import React, { Component } from 'react'
// import styled from 'styled-components'

import Template from 'components/Projects/Template'

const pageName = 'gryphon'

export default class GryphonPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Gryphon Development',
      banner: `/assets/img/${pageName}/banner.jpg`,
      paragraph: `Gryphon Development is a new real estate company that isn't afraid to push the boundries. BAM created the Gryphon brand from the ground up, allowing the interactive team to work side by side with the graphic designers.
      <br><br>
      Gryphon's brand is clean, creative and bold. We wanted to bring that to their digital presence by focusing on  their unique take on art and design.`,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Gryphon Development',
        },
        {
          title: 'Year',
          content: '2018',
        },
        {
          title: 'Role',
          content: 'Web Developer',
        },
        {
          title: 'Website',
          content:
            '<a href="http://gryphonliving.com/" target="_blank" rel="noopener noreferrer">gryphonliving.com/</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
        },
      ],
      buttonLink: 'http://gryphonliving.com/',
      videoSrc: `/assets/video/${pageName}.mp4`,
      iphone: [
        `/assets/img/${pageName}/mobile-1.png`,
        `/assets/img/${pageName}/mobile-2.png`,
        `/assets/img/${pageName}/mobile-3.png`,
      ],
    } 
  }
  render () {
    return (
      <section>
        <Template
          title={this.state.title}
          banner={this.state.banner}
          paragraph={this.state.paragraph}
          details={this.state.details}
          buttonLink={this.state.buttonLink}
          videoSrc={this.state.videoSrc}
          iphone={this.state.iphone}
        />
      </section>
    )
  }
}
