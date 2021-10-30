import React, { useState } from 'react';
import Waypoint from 'react-waypoint';
import { Link } from 'react-static';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  position: relative;
  z-index: 0;
  transition: background-color 100ms ease-in;
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
  &:after {
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
  }
  @media (min-width: 1024px) {
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 50%;
  }
`

const ProjectYear = styled.span`
  position: absolute;
  top: -45px;
  font-size: 80px;
  left: 75px;
  z-index: -1;
  font-weight: bold;
  color: #A1A1A1;
  @media (min-width: 768px) {
    font-size: 150px;
    top: -70px;
    left: -40px;
    opacity: 0.3;
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
`

const ProjectsSection = ({ projects }) => {
  const [ projectPosition, setProjectPosition ] = useState(0);

  const _handleWaypointEnter = () => {
    const idProjectName = document.getElementById('ProjectName');

    idProjectName.classList.add('fixed');
  };
  const _handleWaypointLeave = () => {
    const idProjectName = document.getElementById('ProjectName');

    idProjectName.classList.remove('fixed');
  };
  const _sectionEnter = (index) => setProjectPosition(index);

  return (
    <ProjectContainer style={{ backgroundColor: projects[projectPosition].color}}>
      <div className="container">
        <h2>Projects</h2>
      </div>
      <Waypoint
        bottomOffset="50%"
        scrollableAncestor={window}
        onEnter={_handleWaypointEnter}
        onLeave={_handleWaypointLeave}
      >
        <div className="project-section">
          <ProjectName
            id="ProjectName"
            to={`/${projects[projectPosition].slug}`}
          >
            {projects[projectPosition].name}
            <ProjectYear>{projects[projectPosition].year}</ProjectYear>
            <ProjectCompany style={{ color: projects[projectPosition].color }} >
              {projects[projectPosition].company}
            </ProjectCompany>
          </ProjectName>
          {projects.map((project, index) => (
            <ProjectBlock key={index}>
              <Link to={`/${project.slug}`}>
                <Waypoint
                  key={index}
                  onEnter={() => _sectionEnter(index)}
                  topOffset="40%"
                  bottomOffset="40%"
                  scrollableAncestor={window}
                >
                  <img key={index} src={project.websiteImg} alt={project.name} />
                </Waypoint>
              </Link>
            </ProjectBlock>
          ))}
        </div>
      </Waypoint>
    </ProjectContainer>
  )
}

export default ProjectsSection;