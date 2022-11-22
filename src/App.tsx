import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/styles";
import { theme } from "./styles/styles";

import Home from "./components/pageComponents/Home/Home";
import Footer from "./components/pageComponents/Footer/Footer";
import Navbar from "./components/pageComponents/Navbar/Navbar";
import NotFound from "./components/pageComponents/NotFound/NotFound";

const App = () => {
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
