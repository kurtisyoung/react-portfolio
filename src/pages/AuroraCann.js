import React, { Component } from 'react'
import Project from '../components/Project'
import { auroracann } from '../data/auroraProjects'

export default class AuroraCannPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={auroracann.title}
          banner={auroracann.banner}
          paragraph={auroracann.paragraph}
          details={auroracann.details}
          buttonLink={auroracann.buttonLink}
          videoSrc={auroracann.videoSrc}
          iphone={auroracann.iphone}
        />
      </section>
    )
  }
}
