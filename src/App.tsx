import React from "react";
import { ThemeProvider } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { GlobalStyle } from "./styles/styles";
import { theme } from "./styles/styles";

import RoutesConfig from "./routes";

const App = () => {
    library.add(fas);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RoutesConfig />
        </ThemeProvider>
    );
};

export default App;
