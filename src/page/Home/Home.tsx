import React from "react";

import Wrapper from "components/Wrapper";
import About from "page/About";
import Contact from "page/Contact";
import Portfolio from "page/Portfolio";
import Splash from "page/Splash";

const Home = () => {
    return (
        <Wrapper>
            <Splash />
            <About />
            <Portfolio />
            <Contact />
        </Wrapper>
    );
};

export default Home;
