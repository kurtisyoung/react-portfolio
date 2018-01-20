/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../Components/ProjectTemplate';

const pageName = 'landmark';

class LandmarkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Landmark On Robson',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Landmark On Robson is a residential development that will be replacing the iconic Empire Landmark Hotel in the West End of Vancouver. I worked on the full website and touchscreen app.
      <br>
      <br>
      Working in an agency, you get use to timelines that are constantly shifting. Landmark was originally supposed launch last August but it was not completed until this January. Coding and reiterating the same website for half a year is not ideal but it is part of the job. Even though it took a while to complete, I enjoyed Landmark's unique challenge of having parallaxing SVG letters on every page.`,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Asia Standard Americas & Magnum Projects Ltd',
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
            '<a href="http://landmarkonrobson.com/" target="_blank" rel="noopener noreferrer">landmarkonrobson.com</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
        },
      ],
      buttonLink: 'http://landmarkonrobson.com/',
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

export default LandmarkPage;
