import React, { useEffect } from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'

const ProjectTemplate = styled.div`
  padding-top: 40px; 
  text-align: left;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`

const Title = styled.h1`
  font-size: 40px;
  font-family: var(--font-title);
  position: relative;
  display: inline;
  font-weight: 600;
  color: var(--color-primary);
  @media (min-width: 768px) {
    font-size: 55px;
  }
`;

const Banner = styled.div`
  height: 35vh;
  min-height: 150px;
  width: 100%;
  margin: 30px 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1024px) {
    height: 50vh;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  a {
    text-decoration: underline;
    &:hover {
      font-weight: bold;
    }
  }
  p {
    max-width: 580px;
    width: 100%;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
  .flex-item {
    flex: 0 1 100%;
  }
  .flex-half {
    @media (min-width: 768px) {
      flex: 0 1 50%;
    }
  }
`;

const DetailList = styled.ul`
  padding: 0;
  @media (min-width: 768px) {
    padding-left: 30px;
  }
  p {
    margin: 0;
  }
 
  .title {
    font-size: 0.75rem;
    font-weight: bold;
  }
  .market-title {
    font-size: 0.75rem;
    font-weight: bold;
  }
  li {
    margin-bottom: 5px;
  }
`;

const StyledButton = styled.a`
  background-color: ${props => props.color ? props.color : 'var(--color-secondary)'};
  padding: 15px 30px;
  position: fixed;
  right: 4.9%;
  bottom: 0;
  color: #fff;
  z-index: 10;
  transition: 200ms ease;
  @media (max-width: 768px) {
    display: none;
  }
  &:hover {
    background-color: var(--color-primary);
  }
`;

const VideoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 5%;
  .img-wrapper {
    position: relative;
    display: inline;
  }
  video {
    position: absolute;
    z-index: 1;
    height: 64.5%;
    top: 5%;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 2;
  }
`;

const MobileContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  .mobile-wrapper {
    position: relative;
    &:nth-of-type(2) {
      @media (max-width: 768px) {
        margin: 40px 0;
      }
    }
  }
  .screenshot {
    position: absolute;
    top: 50px;
    left: 12px;
    z-index: 1;
    max-width: 90%;
  }
  .iphone {
    position: relative;
    z-index: 3;
  }
`;

const Project = ({project: {
  name, 
  banner,
  paragraph,
  buttonLink,
  videoSrc,
  iphone,
  color,
  details = []
}}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ProjectTemplate>
      <div className="container">
        <Title style={{ color }}>{name}</Title>
      </div>
      <Banner style={{ backgroundImage: `url('${banner}')` }} />
      <InfoContainer>
        <div className="flex-item flex-half">
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
        </div>
        <div className="flex-item flex-half">
          <DetailList>
            {
              details.map((detail, index) => (
                <li key={index}>
                  <p className="title" style={{ color }}>{detail.name}</p>
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
      <StyledButton href={buttonLink} target="_blank" color={color}>
        View Website
      </StyledButton>
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
};

export default getRouteProps(Project);