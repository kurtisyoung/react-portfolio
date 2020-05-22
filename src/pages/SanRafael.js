import React, { Component } from 'react'
import Project from '../components/Project'
import { sanraf } from '../data/auroraProjects'

export default class SanRafaelPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={sanraf.title}
          banner={sanraf.banner}
          paragraph={sanraf.paragraph}
          details={sanraf.details}
          buttonLink={sanraf.buttonLink}
          videoSrc={sanraf.videoSrc}
          iphone={sanraf.iphone}
        />
      </section>
    )
  }
}
