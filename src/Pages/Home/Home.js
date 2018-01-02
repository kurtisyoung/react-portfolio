/* @flow */

import React from 'react';
import styled from 'styled-components';
import { graphql, createFragmentContainer } from 'react-relay';
import type { Home_stories } from './__generated__/Home_stories.graphql';

import Link from '../../Components/Link';

const StoryList = styled.ul`padding: 0;`;

const Story = styled.li`
  padding-bottom: 0.5em;
  list-style: none;
`;

const QuoteContainer = styled.div`
  position: relative;
  height: 30vh;
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quote = styled.div`
  text-align: center;
  p {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  span {
    font-style: italic;
    margin-top: 10px;
  }
`;

const RecGradient = styled.div`
  height: 325px;
  width: 50px;
  position: absolute;
  top: 84px;
  left: 0;
  background: linear-gradient(-134deg, #3FDFA4 0%, #3E45B9 100%);
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '"In life and business, there are two cardinal sins. The first is to act without thought and the second is not to act at all." - Carl Icahn',
    }
  }
  props: {
    stories: Home_stories,
  };

  render() {
    return (
      <QuoteContainer>
        <RecGradient/>
        <Quote>
          <p>{this.state.quote}</p>
        </Quote>
        {/* <h2>Welcome to React Static Boilerplate</h2>
        <p>
          Below is the list of "stories" fetched from{' '}
          <a href="https://graphql-demo.kriasoft.com/">
            graphql-demo.kriasoft.com
          </a>{' '}
          as an example:
        </p>
        <StoryList>
          {this.props.stories &&
            this.props.stories.edges.map(({ node: story }) => (
              <Story key={story.id}>
                <Link href={`/story-${story.id}`}>{story.title}</Link>
              </Story>
            ))}
        </StoryList> */}
      </QuoteContainer>
    );
  }
}

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_stories on StoryConnection {
      edges {
        node {
          id
          title
        }
      }
    }
  `,
);
