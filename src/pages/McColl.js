import React, { Component } from 'react'
import Project from '../components/Project'
import { mccoll } from '../data/bamProjects'

export default class McCollPage extends Component {
  render () {
    return (
      <section>
        <Project
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

