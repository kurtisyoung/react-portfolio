import React, { Component } from 'react'
import Project from '../components/Project'
import { elenore } from '../data/bamProjects'

export default class ElenorePage extends Component {
  render () {
    return (
      <section>
        <Project
          title={elenore.title}
          banner={elenore.banner}
          paragraph={elenore.paragraph}
          details={elenore.details}
          buttonLink={elenore.buttonLink}
          videoSrc={elenore.videoSrc}
          iphone={elenore.iphone}
        />
      </section>
    )
  }
}
