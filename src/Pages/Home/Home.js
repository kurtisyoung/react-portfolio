/* @flow */

import React from 'react';
import styled from 'styled-components';
// import { graphql, createFragmentContainer } from 'react-relay';
// import type { Home_stories } from './__generated__/Home_stories.graphql';

// import Link from '../../Components/Link';

import QuoteComponent from './Quote';
import ProjectComponent from './Projects';


const HomeContainer = styled.div``;

class Home extends React.Component {
  props: {
    // stories: Home_stories,
    stories: null,
  };

  render() {
    return (
      <HomeContainer>
        <QuoteComponent/>
        <ProjectComponent/>
      </HomeContainer>
    );
  }
}

export default Home;

// export default createFragmentContainer(
//   Home,
//   graphql`
//     fragment Home_stories on StoryConnection {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   `,
// );