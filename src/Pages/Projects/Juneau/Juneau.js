/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

const pageName = 'juneau'

class JuneauPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Juneau By Amacon',
      banner: './assets/img/juneau/banner.jpg',
      paragraph: `Juneau is a residential development being built in the heart of Burnaby. The interactive team designed and developed a teaser website, full website and touchscreen app for Amacon. I worked on both the full website and touchscreen app, but had a bigger role on the website.
      <br/>
      <br/> 
      Juneau was one of my favourite projects that I have worked on at BAM. The UX designer did a great job, designing a site that allowed me to be creative with the animations. I stare at websites all day long and when I come across a static (boring) site, it pains me to scroll through it. That is why I try to engage users by creating a dynamic experience that encourages them to continue learning about the brand and story of the company.`,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Amacon, MLA',
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
            '<a href="https://amacon.com/juneau/" target="_blank" rel="noopener noreferrer">amacon.com/juneau/</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, ScrollMagic, Google Maps API',
        },
      ],
      buttonLink: 'https://amacon.com/juneau/',
      videoSrc: './assets/video/juneau.mp4',
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

export default JuneauPage;
