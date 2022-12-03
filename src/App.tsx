import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { GlobalStyle } from "./styles/styles";
import { theme } from "./styles/styles";

import Home from "./page/Home";
import Footer from "./page/Footer";
import Navbar from "./page/Navbar";
import NotFound from "./page/NotFound";

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
