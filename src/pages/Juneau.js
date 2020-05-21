import React, { Component } from 'react'
import Template from 'components/Projects/Template'
import { juneau } from '../data/bamProjects'

export default class JuneauPage extends Component {
  render () {
    return (
      <section>
        <Template
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
