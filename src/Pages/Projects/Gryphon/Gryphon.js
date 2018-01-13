/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

const pageName = 'gryphon';

class GryphonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Gryphon',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Gryphon is a residential development in the `,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Magnum',
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
            '<a href="https://amacon.com/juneau/" target="_blank" rel="noopener noreferrer">amacon.com/juneau/</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
        },
      ],
      buttonLink: 'https://amacon.com/juneau/',
      videoSrc: `./assets/video/${pageName}.mp4`,
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
        />
      </section>
    );
  }
}

export default GryphonPage;
