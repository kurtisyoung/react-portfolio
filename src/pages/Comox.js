import React, { Component } from 'react'
import Project from '../components/Project'
import { comox } from '../data/auroraProjects'

export default class ComoxPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={comox.title}
          banner={comox.banner}
          paragraph={comox.paragraph}
          details={comox.details}
          buttonLink={comox.buttonLink}
          videoSrc={comox.videoSrc}
          iphone={comox.iphone}
        />
      </section>
    )
  }
}
