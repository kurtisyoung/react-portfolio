/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

const pageName = 'elenore';

class ElenorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Elenore On Fifth',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Elenore is a residential development in the `,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Rennie Marketing & Chard Developments',
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
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
        },
      ],
      buttonLink: 'http://elenoreonfifth.com/',
      videoSrc: `./assets/video/${pageName}.mp4`,
      iphone: [
        `./assets/img/${pageName}/mobile-1.png`,
        `./assets/img/${pageName}/mobile-2.png`,
        `./assets/img/${pageName}/mobile-3.png`,
      ]
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

export default ElenorePage;
