import React from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Splash from "../Splash/Splash";

import "./Home.scss";


const Home = () => {
    return (
        <>
            <Splash />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
};

export default Home;
