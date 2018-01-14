/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

const pageName = 'salt';

class SaltPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Salt Digital',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Salt Digital was a full service marketing agency created by myself and two other partners. We specialized in the food industry because we saw a gap in the market. Unfortunately, my partners and I decided to move on from the business but the website has been saved as a reference of my work.
      <br><br>
      Another partner initially designed the website. However, while I was developing it, I tweaked the design here and there to be more user friendly. I also added parallaxing affects with ScrollMagic on the landing page to engage the user a bit more as the site was fairly static.`,
      details: [
        {
          title: 'Job',
          content: 'Freelancer',
        },
        {
          title: 'Client',
          content: 'Salt Digital',
        },
        {
          title: 'Year',
          content: '2017',
        },
        {
          title: 'Role',
          content: 'Web Developer & UX/UI Designer',
        },
        {
          title: 'Website',
          content:
            '<a href="http://saltdigital.ca" target="_blank" rel="noopener noreferrer">saltdigital.ca</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'HTML, Sass, JQuery, JavaScript, ScrollMagic',
        },
      ],
      buttonLink: 'http://saltdigital.ca',
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

export default SaltPage;
