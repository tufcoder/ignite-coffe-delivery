import { createGlobalStyle } from 'styled-components'

import { baloo2, robotoM } from './typograph'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${robotoM({ isBold: false })}
    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme.background};
  }

  h1, h2, h3, h4, h5, h6 {
    ${baloo2}
    color: ${props => props.theme["base-title"]};
  }

  ul, li {
    list-style: none;
  }

  input, textarea, button {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  :focus {
    outline: 0;
  }
`
