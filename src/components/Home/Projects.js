import React from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { Link } from 'react-static'
// import Link from '../../Components/Link';

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
    @media (min-width: 1440px) {
      max-width: 1000px;
    }
  }
`

const ProjectName = styled(Link)`
  color: #fff;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2.5px;
  position: absolute;
  z-index: 2;
  left: 5%;
  top: 6%;
  text-shadow: 3px 3px 0 #000;
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
  @media (min-width: 1024px) {
    &:hover {
      &:before {
        right: -130px;
      }
      &:after {
        width: 100%;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 50%;
    // left: 30%;
    // transform: translate(-50%, -50%);
  }
`

export default class ProjectComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      arrayPosition: 0,
      projectDetail: [
        {
          src: '/assets/img/home/auroramed-project.png',
          name: 'Aurora Medical',
          link: '/aurora-medical',
          year: '2020',
          company: 'Aurora',
          tech: 'React',
          role: 'Manager',
        },
        {
          src: '/assets/img/home/dailyspecial-project.png',
          name: 'Daily Special',
          link: '/daily-special',
          year: '2020',
          company: 'Aurora',
          tech: 'React',
          role: 'Manager',
        },
        {
          src: '/assets/img/home/auroraeurope-project.png',
          name: 'Aurora Europe',
          link: '/aurora-europe',
          year: '2019',
          company: 'Aurora',
          tech: 'React',
          role: 'Manager',
        },
        {
          src: '/assets/img/home/investor-project.png',
          name: 'Aurora Investor',
          link: '/aurora-investor',
          year: '2019',
          company: 'Aurora',
          tech: 'React',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/comox-project.png',
          name: 'Aurora Comox',
          link: '/aurora-comox',
          year: '2019',
          company: 'Aurora',
          tech: 'React',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/sanraf-project.png',
          name: 'San Rafael 71',
          link: '/san-rafael',
          year: '2018',
          company: 'Aurora',
          tech: 'React',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/altavie-project.png',
          name: 'AltaVie',
          link: '/altavie',
          year: '2018',
          company: 'Aurora',
          tech: 'React',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/auroracann-project.png',
          name: 'AuroraCann',
          link: '/auroracann',
          year: '2018',
          company: 'Aurora',
          tech: 'React',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/auroranordic-project.png',
          name: 'Aurora Nordic',
          link: '/aurora-nordic',
          year: '2018',
          company: 'Aurora',
          tech: 'React',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/project-juneau.png',
          name: 'Juneau By Amacon',
          link: '/juneau',
          year: '2018',
          company: 'BAM',
          tech: 'Vue',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/project-landmark.png',
          name: 'Landmark On Robson',
          link: '/landmark',
          year: '2018',
          company: 'BAM',
          tech: 'Vue',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/project-gryphon.png',
          name: 'Gryphon Development',
          link: '/gryphon',
          year: '2018',
          company: 'BAM',
          tech: 'Vue',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/project-elenore.png',
          name: 'Elenore On Fifth',
          link: '/elenore',
          year: '2017',
          company: 'BAM',
          tech: 'Vue',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/project-salt.png',
          name: 'Salt Digital',
          link: '/salt-digital',
          year: '2017',
          company: 'Freelance',
          tech: 'jQuery',
          role: 'Developer',
        },
        {
          src: '/assets/img/home/project-mccoll.png',
          name: 'McColl Therapy',
          link: '/mccoll',
          year: '2016',
          company: 'Freelance',
          tech: 'WordPress',
          role: 'Developer',
        },
      ],
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
    const projectItems = this.state.projectDetail.map((detail, index) => (
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
              to={this.state.projectDetail[this.state.arrayPosition].link}
            >
              {this.state.projectDetail[this.state.arrayPosition].name}
            </ProjectName>
            {projectItems}
          </div>
        </Waypoint>
      </ProjectContainer>
    )
  }
}
