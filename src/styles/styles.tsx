import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ffff;
    color: #3E3234;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

export const theme = {
  colors: {
    white: "#ffff",
    text: "#3E3234",
    teal: "#00C2C2",
    brick: "#FF6050",
    mustard: "#FFD00E",
  }
}