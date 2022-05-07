import { createGlobalStyle } from 'styled-components'
import { COLORS } from './colors'

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.background};
    margin: 0;
    padding: 0;
    font-family: 'Fredoka', sans-serif;
  }
`
