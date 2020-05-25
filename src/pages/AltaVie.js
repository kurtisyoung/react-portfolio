import React, { Component } from 'react'
import Project from '../components/Project'
import { altavie } from '../data/auroraProjects'

export default class AltaViePage extends Component {
  render () {
    return (
      <section>
        <Project
          title={altavie.title}
          banner={altavie.banner}
          paragraph={altavie.paragraph}
          details={altavie.details}
          buttonLink={altavie.buttonLink}
          videoSrc={altavie.videoSrc}
          iphone={altavie.iphone}
        />
      </section>
    )
  }
}
