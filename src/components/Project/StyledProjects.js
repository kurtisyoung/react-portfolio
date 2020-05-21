import styled from 'styled-components'

const ProjectTemplate = styled.div`padding-top: 100px; text-align: left;`

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 2px;
  font-family: Montserrat, sans-serif;
  position: relative;
  display: inline;
  font-weight: 600;
  color: var(--color-primary);
  @media (min-width: 768px) {
    font-size: 55px;
  }
`

const Banner = styled.div`
  height: 40vh;
  width: 100%;
  margin: 30px 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: rgba(0, 0, 0, 0.5); */
  /* background-blend-mode: multiply; */
  @media (min-width: 768px) {
    height: 60vh;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  p {
    max-width: 580px;
    width: 100%;
    @media (min-width: 1024px) {
      font-size: 20px;
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
`

const DetailList = styled.ul`
  padding: 0;
  @media (min-width: 768px) {
    padding-left: 30px;
  }
  p {
    margin: 0;
  }
  a {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--color-primary);
      transition: 300ms ease;
    }
    @media (min-width: 1024px) {
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
  .title {
    width: 30%;
  }
  .content {
    width: 70%;
  }
  li {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 15px;
    &:last-of-type {
      margin-top: 30px;
    }
  }
`

const ButtonGradient = styled.a`
  background: linear-gradient(-134deg, #3fdfa4 0%, #3e45b9 100%);
  padding: 15px 30px;
  position: fixed;
  right: 4.9%;
  bottom: 0;
  color: #fff;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`

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
`

const MobileContainer = styled.div`
  padding: 100px 0;
  /* background-color: #3A3B3E; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
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
`

export {
  ProjectTemplate,
  Title,
  Banner,
  InfoContainer,
  DetailList,
  ButtonGradient,
  VideoContent,
  MobileContainer,
}
