import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Router, Route, Switch } from 'react-static'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux/store'
import routes from '../config/routes'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/main.css'

const AppContainer = styled.div`
  .app-container {
    width: 100%;
    position: relative;
    padding-top: 20px;
    text-align: center;
  }
  main {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    padding: 20px;
  }
`
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    if (loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }

    return (
      <Provider store={store}>
        <Router>
          <Route
            render={({ location, match, history }) => {
              let generatedRoutes = routes.map((route, index) => {
                let Component = require(`./${route.component}`).default
                return (
                  <Route
                    exact
                    path={route.path}
                    component={Component}
                    key={index}
                  />
                )
              })

              return (
                <AppContainer id="app">
                  <Header type="primary" />
                  <div className="app-container">
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={500}
                      >
                        <Switch location={location}>{generatedRoutes}</Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                  <Footer />
                </AppContainer>
              )
            }}
          />
        </Router>
      </Provider>
    )
  }
}
