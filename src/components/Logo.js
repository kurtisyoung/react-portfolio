import React, { Component } from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

import logoImg from '../assets/bam.svg'

const Logo = styled.img`
  width: 50%;
  max-width: 300px;
`

export default () => <Logo src={logoImg} />
