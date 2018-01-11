import React from 'react';
import styled from 'styled-components';
import { link } from 'fs';

const ProjectTemplate = styled.div`padding-top: 100px;`;

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 2px;
  font-family: Montserrat, sans-serif;
  position: relative;
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
  }
`;

const Banner = styled.div`
  height: 50vh;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px 0;
`;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
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
`;

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
      background: #000;
      transition: 300ms ease;
    }
    &:hover {
      &:before {
        width: 100%;
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
`;

class Template extends React.Component {
  props: {
    title: String,
    banner: String,
    paragraph: String,
    details: Array,
  };

  render() {
    const bannerImage = {
      backgroundImage: `url('${this.props.banner}')`,
    };
    const detailArray = this.props.details.map((detail, index) => (
      <li key={index}>
        <p className="title">{detail.title}</p>
        <p
          className="content"
          dangerouslySetInnerHTML={{ __html: detail.content }}
        />
      </li>
    ));
    return (
      <ProjectTemplate>
        <div className="container">
          <Title>{this.props.title}</Title>
        </div>
        <Banner style={bannerImage} />
        <InfoContainer>
          <div className="flex-item flex-half">
            <p>{this.props.paragraph}</p>
          </div>
          <div className="flex-item flex-half">
            <DetailList>{detailArray}</DetailList>
          </div>
        </InfoContainer>
      </ProjectTemplate>
    );
  }
}

export default Template;
