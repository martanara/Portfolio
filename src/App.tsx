import React from "react";

import About from "./components/pageComponents/About/About";
import Container from "./components/pageComponents/Container/Container";
import Contact from "./components/pageComponents/Contact/Contact";
import Footer from "./components/pageComponents/Footer/Footer";
import Navbar from "./components/pageComponents/Navbar/Navbar";
import Portfolio from "./components/pageComponents/Portfolio/Portfolio";
import Splash from "./components/pageComponents/Splash/Splash";

const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Splash />
                <About />
                <Portfolio />
                <Contact />
            </Container>
            <Footer />
        </>
    );
};

export default App;
