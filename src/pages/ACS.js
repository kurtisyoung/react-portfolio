import React, { Component } from 'react'
import Project from '../components/Project'
import { acs } from '../data/auroraProjects'

export default class acsPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={acs.title}
          banner={acs.banner}
          paragraph={acs.paragraph}
          details={acs.details}
          buttonLink={acs.buttonLink}
          videoSrc={acs.videoSrc}
          iphone={acs.iphone}
        />
      </section>
    )
  }
}
