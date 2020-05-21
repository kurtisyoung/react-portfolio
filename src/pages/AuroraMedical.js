import React, { Component } from 'react'
import Project from '../components/Project'
import { auroramed } from '../data/auroraProjects'

export default class AuroraMedicalPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={auroramed.title}
          banner={auroramed.banner}
          paragraph={auroramed.paragraph}
          details={auroramed.details}
          buttonLink={auroramed.buttonLink}
          videoSrc={auroramed.videoSrc}
          iphone={auroramed.iphone}
        />
      </section>
    )
  }
}
