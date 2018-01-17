/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

const pageName = 'landmark';

class LandmarkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Landmark On Robson',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Landmark On Robson is a residential development that will be replacing the iconic Empire Landmark Hotel in the West End of Vancouver. The interactive team designed and developed a teaser website, full website and touchscreen app. To minimize the amount of work, I created reusable components between the website and app.
      <br>
      <br>
      The biggest challenge I faced during this project was the drawn out timeline. I started coding the website last August but due client changes, it was not completed until this January. Working in an agency environment, you get use to deadlines that are constantly shifting. I have learned to be flexible and understanding of situations that are out of your control.`,
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

export default LandmarkPage;
