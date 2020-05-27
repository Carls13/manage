import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
  }


  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  h1, h2, h3, h4, h5, h6, a {
    font-family: 'Roboto Slab', cursive;
  }

  body {
    height: 100vh;
    margin: 0 auto;
    /* max-width: 500px; */
    overscroll-behavior: none;
    width: 100%; 
  }

  #root {
    background-image: url("./assets/bg-simplify-section-mobile.svg");
  }
`