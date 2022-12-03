import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { GlobalStyle } from "./styles/styles";
import { theme } from "./styles/styles";

import Home from "./page/Home/Home";
import Footer from "./page/Footer/Footer";
import { Navbar } from "./page/Navbar/Navbar";
import NotFound from "./page/NotFound/NotFound";

const App = () => {
    library.add(fas)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
