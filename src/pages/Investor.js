import React, { Component } from 'react'
import Project from '../components/Project'
import { investor } from '../data/auroraProjects'

export default class InvestorPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={investor.title}
          banner={investor.banner}
          paragraph={investor.paragraph}
          details={investor.details}
          buttonLink={investor.buttonLink}
          videoSrc={investor.videoSrc}
          iphone={investor.iphone}
        />
      </section>
    )
  }
}
