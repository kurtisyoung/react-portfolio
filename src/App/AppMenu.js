/* @flow */

import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: 500ms ease;
  background: #000;
  position: fixed;
  z-index: 888;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // opacity: 0;
  // visibility: hidden;
  // pointer-events: none;
  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const MenuList = styled.ul`

`;

class AppMenu extends React.Component {

  render() {
    return (
      <MenuContainer>
        <MenuList>
          <li><a href="/">Home</a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>

        </MenuList>

      </MenuContainer>
    )
  }
}

export default AppMenu