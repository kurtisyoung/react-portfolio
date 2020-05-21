import React, { Component } from 'react'
import Template from 'components/Projects/Template'
import { salt } from '../data/bamProjects'

export default class SaltPage extends Component {
  render () {
    return (
      <section>
        <Template
          title={salt.title}
          banner={salt.banner}
          paragraph={salt.paragraph}
          details={salt.details}
          buttonLink={salt.buttonLink}
          videoSrc={salt.videoSrc}
          iphone={salt.iphone}
        />
      </section>
    )
  }
}
