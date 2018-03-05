import React, { Component } from 'react'
import styled from 'styled-components'

import Template from 'components/Projects/Template'

const pageName = 'landmark';

export default class LandmarkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Landmark On Robson',
      banner: `/assets/img/${pageName}/banner.jpg`,
      paragraph: `Landmark On Robson is a residential development that will be replacing the iconic Empire Landmark Hotel in the West End of Vancouver. It was challenging to create an equally iconic web presence for Landmark.
      <br>
      <br>
      We focused on keeping the design simple and user friendly while adding complex animations. The parallaxing SVG letters, page loading animations and hover effects all create a unique experience for users.`,
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
      videoSrc: `/assets/video/${pageName}.mp4`,
      iphone: [
        `/assets/img/${pageName}/mobile-1.png`,
        `/assets/img/${pageName}/mobile-2.png`,
        `/assets/img/${pageName}/mobile-3.png`,
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
