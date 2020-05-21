// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components'

const sizes = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1600,
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const size = sizes[label]
  accumulator[label] = (...args) => css`
    @media (max-width: ${size}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
