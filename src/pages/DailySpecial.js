import React, { Component } from 'react'
import Project from '../components/Project'
import { dailyspecial } from '../data/auroraProjects'

export default class DailySpecialPage extends Component {
  render () {
    return (
      <section>
        <Project
          title={dailyspecial.title}
          banner={dailyspecial.banner}
          paragraph={dailyspecial.paragraph}
          details={dailyspecial.details}
          buttonLink={dailyspecial.buttonLink}
          videoSrc={dailyspecial.videoSrc}
          iphone={dailyspecial.iphone}
        />
      </section>
    )
  }
}
