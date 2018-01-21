import React, { Component } from 'react'
import styled from 'styled-components'

import Template from 'components/Projects/Template'

const pageName = 'mccoll'

export default class McCollPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'McColl Therapy',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `McColl Therapy, a group of occupational therapists that offer therapy and counselling services, was my first client after graduating from RED Academy. I designed and developed a Custom WordPress Theme with custom post types and field suites, giving them the flexibility to change what they wanted. 
      <br><br>
      Since this was my first freelance job, I learned how to interact with clients, meet deadlines and create invoices on the job. I have kept an ongoing relationship with them and in 2018 a new version of their website will be launched.`,
      details: [
        {
          title: 'Job',
          content: 'Freelance',
        },
        {
          title: 'Client',
          content: 'McColl Therapy',
        },
        {
          title: 'Year',
          content: '2016',
        },
        {
          title: 'Role',
          content: 'Web Developer & UX/UI Designer',
        },
        {
          title: 'Website',
          content:
            '<a href="http://mccolltherapy.com/" target="_blank" rel="noopener noreferrer">mccolltherapy.com</a>',
        },
        {
          title: 'Github',
          content:
            '<a href="https://github.com/kurtisyoung/wordpress-mccoll-therapy" target="_blank" rel="noopener noreferrer">kurtisyoung/mccoll-therapy</a>',
        },
        {
          title: 'Tech Stack',
          content: 'WordPress, PHP, HTML5, Sass, JQuery, JavaScript, Gulp, npm',
        },
      ],
      buttonLink: 'http://mccolltherapy.com/',
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

