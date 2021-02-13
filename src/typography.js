import { createGlobalStyle } from 'styled-components'
import '@fontsource/inter'

const Typography = createGlobalStyle`
  html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: white;
    text-decoration-color: var(--red);
    text-decoration-skip-ink: none;
  }
`

export default Typography
