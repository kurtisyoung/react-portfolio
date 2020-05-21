import React, { Component } from 'react'
import Template from 'components/Projects/Template'
import { gryphon } from '../data/bamProjects'

export default class GryphonPage extends Component {
  render () {
    return (
      <section>
        <Template
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
