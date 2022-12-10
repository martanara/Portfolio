import React from "react";

import About from "page/About";
import Contact from "page/Contact";
import Portfolio from "page/Portfolio";
import Splash from "page/Splash";

const Home = () => {
    return (
        <React.Fragment>
            <Splash />
            <About />
            <Portfolio />
            <Contact />
        </React.Fragment>
    );
};

export default Home;
