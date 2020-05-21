import React, { Component } from 'react'
import Project from '../components/Project'
import { juneau } from '../data/bamProjects'

export default class JuneauPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={juneau.title}
          banner={juneau.banner}
          paragraph={juneau.paragraph}
          details={juneau.details}
          buttonLink={juneau.buttonLink}
          videoSrc={juneau.videoSrc}
          iphone={juneau.iphone}
        />
      </section>
    )
  }
}
