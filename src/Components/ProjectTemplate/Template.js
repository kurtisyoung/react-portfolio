import React from 'react'
import styled from 'styled-components'

const ProjectTemplate = styled.div`
  padding-top: 100px;`

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 2px;
  font-family: Montserrat, sans-serif;
  position: relative;
  margin-left: 5%;
  display: inline;
  @media (min-width: 768px) {
    font-size: 50px;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      background-color: #000;
      transform: translateY(-50%);
      right: -120px;
      height: 10px;
      width: 100px;
    }
  }`

const Banner = styled.div`
  height: 50vh;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px 0;`

const infoContainer =  styled.div``

const detailList = styled.ul`
  `

class Template extends React.Component {
  props: {
    title: String,
    banner: String,
    paragraph: String,
    details: Array,
  }

  render() {
    const bannerImage = {
      backgroundImage: `url('${this.props.banner}')`,
    }
    return (
      <ProjectTemplate>
        <Title>{this.props.title}</Title>
        <Banner style={bannerImage}></Banner>
        <infoContainer className="container">
          <p>{this.props.paragraph}</p>
          <detailList>
            <li>
              <h3>Agency</h3>
              <p>BAM Communications</p>
            </li>
            <li>
              <h3>Agency</h3>
              <p>BAM Communications</p>
            </li>
            <li>
              <h3>Agency</h3>
              <p>BAM Communications</p>
            </li>
            <li>
              <h3>Agency</h3>
              <p>BAM Communications</p>
            </li>
            <li>
              <h3>Agency</h3>
              <p>BAM Communications</p>
            </li>
          </detailList>
        </infoContainer>
      </ProjectTemplate>
    )
  }
}

export default Template