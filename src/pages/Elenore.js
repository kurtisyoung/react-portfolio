import React, { Component } from 'react'
import styled from 'styled-components'

import Template from 'components/Projects/Template'

const pageName = 'elenore';

export default class ElenorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Elenore On Fifth',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Elenore On Fifth is a residential development currently being built on Main and 5th Ave. I worked on the full website and touchscreen app.
      <br>
      <br>
       The biggest challenge for this project was the tight deadline we had to meet. We were able to finish the website on time and within the budget because we had a good system in place. We used Github branches to minimize merge conflicts and Vue allowed us to work quickly and efficiently, giving us time to create a dynamic experience for users.`,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Chard Developments & Rennie Marketing',
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
            '<a href="http://elenoreonfifth.com/" target="_blank" rel="noopener noreferrer">elenoreonfifth.com</a>',
        },
        {
          title: 'Tech Stack',
          content: 'Vue JS, JavaScript, HTML5, Sass, WebPack, Google Maps API',
        },
      ],
      buttonLink: 'http://elenoreonfifth.com/',
      videoSrc: `./assets/video/${pageName}.mp4`,
      iphone: [
        `./assets/img/${pageName}/mobile-1.png`,
        `./assets/img/${pageName}/mobile-2.png`,
        `./assets/img/${pageName}/mobile-3.png`,
      ],
    };
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
    );
  }
}
