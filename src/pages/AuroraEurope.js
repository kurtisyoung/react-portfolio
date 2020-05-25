import React, { Component } from 'react'
import Project from '../components/Project'
import { auroraeurope } from '../data/auroraProjects'

export default class AuroraEuropePage extends Component {
  render () {
    return (
      <section>
        <Project
          title={auroraeurope.title}
          banner={auroraeurope.banner}
          paragraph={auroraeurope.paragraph}
          details={auroraeurope.details}
          buttonLink={auroraeurope.buttonLink}
          videoSrc={auroraeurope.videoSrc}
          iphone={auroraeurope.iphone}
        />
      </section>
    )
  }
}
