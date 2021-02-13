import { createGlobalStyle } from "styled-components";
import { breakpoint } from "./lib/breakpoints";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #161618;
    --red: #D9222E;
    --yellow: #F2C968;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    background: var(--black);
    color: white;
  }

  p, ul {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
    font-size: 1.6rem;
    line-height: 2.4rem;
    ${breakpoint("small", `font-size: 2rem; line-height: 4rem;`)}
  }

  a {
    text-decoration: none;
    background: linear-gradient(to bottom, var(--yellow) 0%, var(--yellow) 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 5px;
    color: white;
    transition: background-size 0.4s;

    &:hover {
      background-size: 3px 50px;
    }
  }

  ul > li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export default GlobalStyles;
