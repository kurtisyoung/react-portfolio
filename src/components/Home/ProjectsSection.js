import React from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { Link } from 'react-static'
import projects from '../../data/homeProjectsSection'

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  padding: 50px 0;
  position: relative;
  z-index: 0;
  h2 {
    font-family: var(--font-title);
    font-weight: bold;
    color: #fff;
    text-align: left;
    @media (min-width: 768px) {
      margin: 46px 0 0 70px;
    }
  }`

const ProjectBlock = styled.div`
  margin: 50px 0;
  text-align: right;
  img {
    width: 100%;
    height: auto;
    margin-left: auto;
    @media (min-width: 768px) {
      max-width: 500px;
      z-index: 1;
      position: relative;
      right: 5%;
    }
    @media (min-width: 1200px) {
      max-width: 700px;
    }
    @media (min-width: 1600px) {
      max-width: 900px;
    }
  }
`

const ProjectName = styled(Link)`
  color: #fff;
  font-size: 28px;
  font-family: var(--font-title);
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 1;
  text-shadow: 2px 2px 3px #000;
  margin: 0;
  text-decoration: none;
  font-weight: 600;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: 300ms ease;
    background-color: #fff;
  }
  &:before {
    @media (min-width: 768px) {
      /* top: 50%;
      transform: translateY(-50%);
      box-shadow: 2px 2px 2px 0 #000;
      right: -120px;
      height: 2px;
      width: 50px; */
    }
  }
  &:after {
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
  }
  @media (min-width: 1024px) {
    &:hover {
      &:before {
        /* left: -130px; */
        /* width: 75px; */
      }
      &:after {
        width: 100%;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 50%;
    /* left: 30%; */
    /* transform: translate(-50%, -50%); */
  }
`

const ProjectYear = styled.span`
  position: absolute;
  top: -45px;
  font-size: 100px;
  left: 75px;
  z-index: -1;
  font-weight: bold;
  color: #A1A1A1;
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 150px;
    top: -70px;
    left: -40px;
    opacity: 0.2;
  }
  @media (min-width: 1024px) {
    top: -100px;
    left: -65px;
    font-size: 200px;
  }
  @media (min-width: 1660px) {
    top: -130px;
    left: -80px;
    font-size: 250px;
  }
`

const ProjectCompany = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  left: 0;
  top: -14px;
  color: ${props => {
    const color = props.color
    
    if (color === 'Aurora') {
      return '#26B0E7'
    } else if (color === 'BAM') {
      return '#adadad'
    } else if (color === 'Freelance') {
      return '#FD243E'
    } else { 
      return '#FFFFFF' 
    }
  }};
`


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
                color={this.state.projects[this.state.arrayPosition].company}
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
