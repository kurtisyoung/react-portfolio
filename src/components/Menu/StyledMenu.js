import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-left: 50px;
  grid-gap: 20px;
  @media (min-width: 768px) {
    padding-left: 29%;
    grid-gap: 120px;
  }
`

const GridItem = styled.div``

const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  transition: 500ms ease;
  background: var(--color-primary);
  position: fixed;
  z-index: 888;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  overflow-y: scroll;
  &.true {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`

const Rectangle = styled.div`
  width: 15px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  @media (min-width: 768px) {
    width: 25%;
  }
  &.gradient {
    background: linear-gradient(90deg, var(--color-bg) var(--dot-size), transparent 1%) center, linear-gradient(var(--color-bg) var(--dot-size), transparent 1%) center, var(--color-primary);
    background-size: var(--dot-space) var(--dot-space);
  }
`

const MenuList = styled.ul`
  list-style: none;
  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    font-size: 12px;
    transition: 300ms ease;
    font-family: var(--font-title);
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: #fff;
      transition: 300ms ease;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
  &.main {
    padding-left: 0;
    a {
      &.active {
        font-size: 16px;
        font-weight: 700;
        display: inline-block;
        background: var(--color-secondary);
        background: -webkit-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        background: -o-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        background: -moz-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        background: linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (min-width: 768px) {
          font-size: 25px;
        }
      }
      @media (min-width: 1024px) {
        &:hover {
          font-size: 16px;
          font-weight: 700;
          display: inline-block;
          background: var(--color-secondary);
          background: -webkit-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          background: -o-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          background: -moz-linear-gradient(right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          background: linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          @media (min-width: 768px) {
            font-size: 25px;
          }
        }
      }
    }
    li {
      margin-bottom: 10px;
    }
  }
  &.external {
  padding-left: 50px;
  @media (min-width: 768px) {
    padding-left: 29%;
  }
    a {
      font-size: 10px !important;
      @media (min-width: 1024px) {
        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
    li {
      &:first-of-type {
        margin-bottom: 20px;
      }
    }
  }
`

const CategoryTitle = styled.h3`
  font-family: var(--font-title);
  color: #FFF;
  font-weight: bold;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  &.aurora {
    color: var(--color-aurora);
  }
  &.bam {
    color: var(--color-bam);
  }
  &.freelance {
    color: var(--color-freelance);
    margin-top: 40px;
  }
`

export {
  GridContainer,
  GridItem,
  CategoryTitle,
  MenuList,
  Rectangle,
  MenuContainer,
}
