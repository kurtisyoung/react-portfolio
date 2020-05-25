import React from 'react'
import Waypoint from 'react-waypoint'
import { Link } from 'react-static'
import projects from '../../../data/homeProjectsSection'
import {
  ProjectContainer,
  ProjectBlock,
  ProjectName,
  ProjectYear,
  ProjectCompany,
} from './StyledProjectsSection'

export default class ProjectComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      arrayPosition: 0,
      projects,
    }
  }

  _handleWaypointEnter () {
    // console.log('entered');
    const idProjectName = document.getElementById('ProjectName');

    idProjectName.classList.add('fixed');
  }
  _handleWaypointLeave () {
    // console.log('left');
    const idProjectName = document.getElementById('ProjectName');

    idProjectName.classList.remove('fixed');
  }
  _sectionEnter (index) {
    this.setState({
      arrayPosition: index,
    })
    // console.log(`section-${index}`)
    // console.log(this.state.arrayPosition)
  }

  render () {
    const projectItems = this.state.projects.map((detail, index) => (
      <ProjectBlock key={index}>
        <Link to={detail.link}>
          <Waypoint
            key={index}
            onEnter={this._sectionEnter.bind(this, index)}
            topOffset="40%"
            bottomOffset="40%"
            scrollableAncestor={window}
          >
              <img key={index} src={detail.src} alt={detail.name} />
          </Waypoint>
        </Link>
      </ProjectBlock>
    ))

    return (
      <ProjectContainer>
        <div className="container">
          <h2>Projects</h2>
        </div>
        <Waypoint
          bottomOffset="50%"
          scrollableAncestor={window}
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
          <div className="project-section">
            <ProjectName
              id="ProjectName"
              to={this.state.projects[this.state.arrayPosition].link}
            >
              {this.state.projects[this.state.arrayPosition].name}
              <ProjectYear>{this.state.projects[this.state.arrayPosition].year}</ProjectYear>
              <ProjectCompany
                className={this.state.projects[this.state.arrayPosition].company}
              >
                {this.state.projects[this.state.arrayPosition].company}
              </ProjectCompany>
            </ProjectName>
            {projectItems}
          </div>
        </Waypoint>
      </ProjectContainer>
    )
  }
}
