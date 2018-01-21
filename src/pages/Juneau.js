import React, { Component } from 'react'
import styled from 'styled-components'

import Template from 'components/Projects/Template'

const pageName = 'juneau'

export default class JuneauPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Juneau By Amacon',
      banner: './assets/img/juneau/banner.jpg',
      paragraph: `Juneau is a residential development built in the heart of Burnaby. I worked on both the full website and touchscreen app. Vue made it easy share components between the site and app, minimizing the amount of work we had to do.
      <br/>
      <br/> 
      This was one of my favourite projects that I've worked on. The layout, design and feel of the website is exactly what I look for in other websites. Every page interacts with the user in a different way. It makes the user curious and keeps them guessing. That's what I love about coding. There are endless ways you can be creative.`,
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
          content:
            '<a href="https://amacon.com/juneau/" target="_blank" rel="noopener noreferrer">amacon.com/juneau/</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
        },
      ],
      buttonLink: 'https://amacon.com/juneau/',
      videoSrc: './assets/video/juneau.mp4',
      iphone: [
        `./assets/img/${pageName}/mobile-1.png`,
        `./assets/img/${pageName}/mobile-2.png`,
        `./assets/img/${pageName}/mobile-3.png`,
      ],
    }
  }
  render() {
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
