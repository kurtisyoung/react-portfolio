import React, { Component } from 'react'
import Project from '../components/Project'
import { landmark } from '../data/bamProjects'


export default class LandmarkPage extends Component {
  render () {
    return (
      <section>
        <Project
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
