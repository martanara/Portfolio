import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
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
