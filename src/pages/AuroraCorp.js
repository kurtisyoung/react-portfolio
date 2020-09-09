import React, { Component } from 'react'
import Project from '../components/Project'
import { auroracorp } from '../data/auroraProjects'

export default class auroracorpPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={auroracorp.title}
          banner={auroracorp.banner}
          paragraph={auroracorp.paragraph}
          details={auroracorp.details}
          buttonLink={auroracorp.buttonLink}
          videoSrc={auroracorp.videoSrc}
          iphone={auroracorp.iphone}
        />
      </section>
    )
  }
}
