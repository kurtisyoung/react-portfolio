import React, { Component } from 'react'
import Project from '../components/Project'
import { gryphon } from '../data/bamProjects'

export default class GryphonPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={gryphon.title}
          banner={gryphon.banner}
          paragraph={gryphon.paragraph}
          details={gryphon.details}
          buttonLink={gryphon.buttonLink}
          videoSrc={gryphon.videoSrc}
          iphone={gryphon.iphone}
        />
      </section>
    )
  }
}
