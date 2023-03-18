import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ffff;
    color: #3E3234;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    
    button, input, select, textarea {
      font-family: 'Source Sans Pro';
      outline: none;
    }
  }
`;

export const theme = {
    colors: {
        white: "#ffff",
        text: "#3E3234",
        teal: "#00C2C2",
        brick: "#FF6050",
        mustard: "#FFD00E",
    },
    background: {
        teal: "#a5d4d4",
        brick: "#f5b2ab",
    },
};
