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
    color: #FFF;
    letter-spacing: 2px;
    @media (min-width: 768px) {
      margin: 83px 0 0 70px;
    }
  }
`;

const ProjectBlock = styled.div`
  margin: 50px 0;
  text-align: right;
  img {
    width: 100%;
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
  }
`;

const ProjectName = styled(Link)`
  color: #FFF;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2.5px;
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 30%;
  text-shadow: 3px 3px 2px #000;
  margin: 0;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  &:before {
    @media (min-width: 768px) {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #FFF;
      box-shadow: 2px 2px 2px 0 #000;
      right: -120px;
      height: 10px;
      width: 100px;
    }
  }
`;

class ProjectComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectDetail: [
        {
          src: './assets/img/home/project-juneau.png',
          name: 'Juneau By Amacon',
          link: '',
        },
        {
          src: './assets/img/home/project-elenore.png',
          name: 'Elenore On Fifth',
          link: '',
        },
        {
          src: './assets/img/home/project-landmark.png',
          name: 'Landmark',
          link: '',
        },
        {
          src: './assets/img/home/project-salt.png',
          name: 'Salt Digital',
          link: '',
        },
        {
          src: './assets/img/home/project-mccoll.png',
          name: 'McColl Therapy',
          link: '',
        },
      ],
    }
  }

  _handleWaypointEnter() {
    console.log('hello')
  }

  render() {
    const projectDetails = this.state.projectDetail;
    const projectItems = projectDetails.map((detail, index) =>
      <ProjectBlock key={index}>
        <img src={detail.src} alt={detail.name}/>
      </ProjectBlock>
    );

    return (
      <ProjectContainer>
        <div className="container">
          <h2>Projects</h2>
        </div>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          threshold={0}
        />
        <ProjectName href="/">{this.state.projectDetail[0].name}</ProjectName>
        {projectItems}

      </ProjectContainer>
    )
  }
}

export default ProjectComponent