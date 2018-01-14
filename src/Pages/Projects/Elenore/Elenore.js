/* @flow */

import React from 'react';
import styled from 'styled-components';

import Template from '../../../Components/ProjectTemplate';

const pageName = 'elenore';

class ElenorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Elenore On Fifth',
      banner: `./assets/img/${pageName}/banner.jpg`,
      paragraph: `Elenore On Fifth is a residential development being built on Main Street and 5th Ave. A central location both near downtown and false creek. BAM designed and developed a teaser website, full website and touschreen app. I worked on the full website with two other developers.
      <br>
      <br>
      The main challenge for this project was that we had a very tight deadline to meet. I was originally supposed to work on the site by myself but thankfully I pulled in two of my co-workers to help out. With a good team behind me, we got this project done without having to simplify the orignal design. Vue also allowed us to work quickly and efficiently, giving us time to create a more dynamic experience for users.`,
      details: [
        {
          title: 'Agency',
          content: 'BAM Communications',
        },
        {
          title: 'Client',
          content: 'Chard Developments & Rennie Marketing',
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
            '<a href="http://elenoreonfifth.com/" target="_blank" rel="noopener noreferrer">elenoreonfifth.com</a>',
        },
        {
          title: 'Tech Stack',
          content:
            'Vue JS, JavaScript, HTML5, Sass, WebPack, Google Maps API',
        },
      ],
      buttonLink: 'http://elenoreonfifth.com/',
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

export default ElenorePage;
