import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pageComponents/Home/Home";
import Footer from "./components/pageComponents/Footer/Footer";
import Navbar from "./components/pageComponents/Navbar/Navbar";
import NotFound from "./components/pageComponents/NotFound/NotFound";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
