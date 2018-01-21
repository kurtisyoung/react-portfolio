import { CSSTransition } from 'react-transition-group'
import Transition from 'react-transition-group/Transition'
import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import Button from 'components/Button'
import locales from '../../config/locales'

import Hero from 'components/Home/Hero'
import Quote from 'components/Home/Quote'
import Projects from 'components/Home/Projects'


const HomeWrapper = styled.section`
  .loader:empty {
    /* position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: 6em;
    height: 6em;
    border: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid black;
    border-radius: 50%;
    animation: load8 1.1s infinite linear; */
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default class Home extends Component {
  constructor(props) {
    super(props)
    locales.init(this.props)

    this.state = {
      // loading: true
    }
  }
  componentDidMount() {
    // setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
    window.scrollTo(0, 0);
  }
  render() {
    // const { loading } = this.state;
    
    // if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }

    return (
      <HomeWrapper class="loader">
        {/* <Logo /> */}
        {/* <h1>{locales.home.hello}</h1> */}
        {/* <Button link={locales.home.link}>{locales.home.btn}</Button> */}
        <Hero></Hero>
        <Quote></Quote>
        <Projects></Projects>
      </HomeWrapper>
    )
  }
}
