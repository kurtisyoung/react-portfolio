import React, { Component } from 'react'
import Template from 'components/Projects/Template'
import { elenore } from '../data/bamProjects'

export default class ElenorePage extends Component {
  render () {
    return (
      <section>
        <Template
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
