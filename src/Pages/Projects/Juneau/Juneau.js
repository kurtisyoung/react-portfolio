/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

class JuneauPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Juneau By Amacon',
      banner: './assets/img/juneau/banner.jpg',
      paragraph: `Juneau is a residential development built by Amacon in the heart of Burnaby. The BAM interactive team was tasked with designing and developing a teaser website, full website and touchscreen app. I was the lead developer on the full website and helped develop the touchscreen app. <br/><br/> The website was built with Vue JS along with Sass and HTML. Incorporating ScrollMagic into the project helped create a more dynamic experience for our users. The Google Maps API was used to create an interactive map of the neighbourhood around Juneau.`,
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
        './assets/img/juneau/mobile-1.png',
        './assets/img/juneau/mobile-2.png',
        './assets/img/juneau/mobile-3.png',
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
