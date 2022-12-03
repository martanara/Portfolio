import React from "react";

import Wrapper from "../../components/Wrapper";
import About from "../About/About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Splash from "../Splash/Splash";

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
