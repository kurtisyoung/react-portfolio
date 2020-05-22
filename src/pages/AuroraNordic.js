import React, { Component } from 'react'
import Project from '../components/Project'
import { auroranordic } from '../data/auroraProjects'

export default class AuroraNordicPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={auroranordic.title}
          banner={auroranordic.banner}
          paragraph={auroranordic.paragraph}
          details={auroranordic.details}
          buttonLink={auroranordic.buttonLink}
          videoSrc={auroranordic.videoSrc}
          iphone={auroranordic.iphone}
        />
      </section>
    )
  }
}
