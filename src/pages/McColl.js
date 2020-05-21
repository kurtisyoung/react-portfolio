import React, { Component } from 'react'
import Template from 'components/Projects/Template'
import { mccoll } from '../data/bamProjects'

export default class McCollPage extends Component {
  render () {
    return (
      <section>
        <Template
          title={mccoll.title}
          banner={mccoll.banner}
          paragraph={mccoll.paragraph}
          details={mccoll.details}
          buttonLink={mccoll.buttonLink}
          videoSrc={mccoll.videoSrc}
          iphone={mccoll.iphone}
        />
      </section>
    )
  }
}

