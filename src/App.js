import React, { Fragment, useState, useEffect  } from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';

import './styles/main.css';

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
const App = () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return !spinner && (
    <Provider store={store}>
      <Router>
        <Fragment>
          <ScrollToTop />
          <Header type="primary" />
          <AppContainer id="app" className="app-container">
            <Routes />
          </AppContainer>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;