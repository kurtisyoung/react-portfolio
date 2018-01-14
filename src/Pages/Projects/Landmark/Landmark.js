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
      paragraph: `Landmark On Robson is a residential development that will be replacing the iconic Empire Landmark Hotel in the West End of Vancouver. BAM was tasked with designing and developing a teaser website, full website and touchscreen app for their presale centre. I have worked on both the full website and touchscreen app. However, this project page features only the full website. 
      <br>
      <br>
      The biggest challenge I faced during this project was the drawn out timeline. I originally started developing this website last August. Due to client changes in the design and their deadline, it was not completed until this January. Of course, this is normal for projects at an agnecy. Deadlines are never set in stone. They can move up to the next day or be pushed back for half a year. It has taught me to be very flexible and understanding of clients and their needs.`,
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
