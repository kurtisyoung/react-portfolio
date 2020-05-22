import React, { Component } from 'react'
import Project from '../components/Project'
import { salt } from '../data/bamProjects'

export default class SaltPage extends Component {
  render () {
    return (
      <section>
        <Project
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
