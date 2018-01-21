import React, { Component } from 'react'
import styled from 'styled-components'

import Template from 'components/Projects/Template'

const pageName = 'salt'

export default class SaltPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Salt Digital',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Salt Digital was a full service marketing agency created by myself and two other partners. Unfortunately, my partners and I decided to move on from the business but the website has been saved as a reference of my work.
      <br><br>
      Starting a business is tough. There was a lot more work than just getting clients and developing websites. We tried to be a full service agency when we should have just focused on one aspect of the industry. Even though it didn't work out, I learned a lot from the experience. Salt digital will be back.`,
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
          title: 'Github',
          content:
            '<a href="https://github.com/saltdigital/salt-full" target="_blank" rel="noopener noreferrer">saltdigital/salt-full</a>',
        },
        {
          title: 'Tech Stack',
          content: 'HTML, Sass, JQuery, JavaScript, Gulp, npm, ScrollMagic',
        },
      ],
      buttonLink: 'http://saltdigital.ca',
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
