import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ProjectTemplate,
  Title,
  Banner,
  InfoContainer,
  DetailList,
  ButtonGradient,
  VideoContent,
  MobileContainer,
} from './StyledProjects'

class Template extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    const { 
      paragraph,
      title,
      details,
      videoSrc,
      buttonLink,
      iphone,
    } = this.props
    const bannerImage = { backgroundImage: `url('${this.props.banner}')` }

    return (
      <ProjectTemplate>
        <div className="container">
          <Title>{title}</Title>
        </div>
        <Banner style={bannerImage} />
        <InfoContainer>
          <div className="flex-item flex-half">
            <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          </div>
          <div className="flex-item flex-half">
            <DetailList>
              {
                details.map((detail, index) => (
                  <li key={index}>
                    <p className="title">{detail.title}</p>
                    <p
                      className="content"
                      dangerouslySetInnerHTML={{ __html: detail.content }}
                    />
                  </li>
                ))
              }
            </DetailList>
          </div>
        </InfoContainer>
        <ButtonGradient href={buttonLink} target="_blank">
          View Website
        </ButtonGradient>
        <VideoContent>
          <div className="img-wrapper">
            <video loop muted playsInline autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src="/assets/img/desktop.svg" alt="Desktop" />
          </div>
        </VideoContent>
        <MobileContainer>
          {
            iphone.map((phone, index) => (
              <div className="mobile-wrapper" key={index}>
                <img className="screenshot" src={phone} alt="" />
                <img
                  className="iphone"
                  src="/assets/img/iphone.svg"
                  alt="iPhone"
                />
              </div>
            ))
          }
        </MobileContainer>
      </ProjectTemplate>
    )
  }
}

Template.propTypes = {
  title: PropTypes.string,
  banner: PropTypes.string,
  paragraph: PropTypes.string,
  details: PropTypes.array,
  buttonLink: PropTypes.string,
  videoSrc: PropTypes.string,
  iphone: PropTypes.array,
}

export default Template
