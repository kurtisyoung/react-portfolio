/* @flow */

import React from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';

import Link from '../../Components/Link';

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  padding: 50px 0;
  position: relative;
  z-index: 0;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
    @media (min-width: 768px) {
      margin: 46px 0 0 70px;
    }
  }
`;

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
    @media (min-width: 1440px) {
      max-width: 1000px;
    }
  }
`;

const ProjectName = styled(Link)`
  color: #fff;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2.5px;
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 6%;
  text-shadow: 3px 3px 2px #000;
  margin: 0;
  text-decoration: none;
  font-weight: 600;
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
      top: 50%;
      transform: translateY(-50%);
      box-shadow: 2px 2px 2px 0 #000;
      right: -120px;
      height: 10px;
      width: 100px;
    }
  }
  &:after {
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
  }
  &:hover {
    &:before {
      right: -130px;
    }
    &:after {
      width: 100%;
    }
  }
  &.fixed {
    position: fixed;
    top: 50%;
    // left: 30%;
    // transform: translate(-50%, -50%);
  }
`;

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayPosition: 0,
      projectDetail: [
        {
          src: './assets/img/home/project-juneau.png',
          name: 'Juneau By Amacon',
          link: '/juneau-by-amacon',
        },
        {
          src: './assets/img/home/project-landmark.png',
          name: 'Landmark On Robson',
          link: '/landmark',
        },
        {
          src: './assets/img/home/project-gryphon.png',
          name: 'Gryphon Developments',
          link: '/gryphon-developments',
        },
        {
          src: './assets/img/home/project-elenore.png',
          name: 'Elenore On Fifth',
          link: '/elenore-on-fifth',
        },
        {
          src: './assets/img/home/project-salt.png',
          name: 'Salt Digital',
          link: '/salt-digital',
        },
        {
          src: './assets/img/home/project-mccoll.png',
          name: 'McColl Therapy',
          link: '/mccoll-therapy',
        },
      ],
    };
  }

  _handleWaypointEnter() {
    console.log('entered');
    const idProjectName = document.getElementById('ProjectName');

    idProjectName.classList.add('fixed');
  }
  _handleWaypointLeave() {
    console.log('left');
    const idProjectName = document.getElementById('ProjectName');

    idProjectName.classList.remove('fixed');
  }
  _sectionEnter(index) {
    this.setState({
      arrayPosition: index,
    });
    // console.log(`section-${index}`)
    // console.log(this.state.arrayPosition)
  }

  render() {
    const projectDetails = this.state.projectDetail;
    const projectItems = projectDetails.map((detail, index) => (
      <ProjectBlock key={index}>
        <Waypoint
          key={index}
          onEnter={this._sectionEnter.bind(this, index)}
          topOffset="40%"
          bottomOffset="40%"
          scrollableAncestor={window}
        >
          <img key={index} src={detail.src} alt={detail.name} />
        </Waypoint>
      </ProjectBlock>
    ));

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
              href={this.state.projectDetail[this.state.arrayPosition].link}
            >
              {this.state.projectDetail[this.state.arrayPosition].name}
            </ProjectName>
            {projectItems}
          </div>
        </Waypoint>
      </ProjectContainer>
    );
  }
}

export default ProjectComponent;
