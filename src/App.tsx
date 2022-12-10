import React from "react";
import { ThemeProvider } from "styled-components";

// prime react
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// styles
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
