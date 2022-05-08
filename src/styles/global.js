import { createGlobalStyle } from 'styled-components'
import { COLORS } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.background};
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Fredoka', sans-serif;
    width: 100%;
    align-self: center;
  }
`
