/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../Components/ProjectTemplate';

const pageName = 'gryphon';

class GryphonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Gryphon Developments',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Gryphon Developments is a new real estate company that isn't afraid to push the boundries. BAM created the Gryphon brand from the ground up, allowing the interactive team to work side by side with the graphic designers.
      <br><br>
      Corporate websites have a different feel from pre-sale building sites. It's more about selling the company and it's brand than floorplans. Gryphon's branding is very well done. Clean, creative and bold. The biggest challenge of this website was creating a slider carousel from the scratch with parallaxing images and an overlaying slide effect.`,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Gryphon Developments',
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

export default GryphonPage;
