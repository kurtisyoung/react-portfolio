import React, { Component } from 'react'
import Template from 'components/Projects/Template'
import { landmark } from '../data/bamProjects'


export default class LandmarkPage extends Component {
  render () {
    return (
      <section>
        <Template
          title={landmark.title}
          banner={landmark.banner}
          paragraph={landmark.paragraph}
          details={landmark.details}
          buttonLink={landmark.buttonLink}
          videoSrc={landmark.videoSrc}
          iphone={landmark.iphone}
        />
      </section>
    )
  }
}
