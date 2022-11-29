import React from "react";

import { StyledLeftSection, StyledRightSection, StyledSplash } from "./Splash.styles";

const Splash = () => {
    return (
        <StyledSplash>
            <StyledLeftSection>
                <p>Hello, I'm Marta Nara</p>
                <p>I'm a Web Developer based in Krakow, Poland</p>
            </StyledLeftSection>
            <StyledRightSection img="/2784258.jpg"></StyledRightSection>
        </StyledSplash>
    );
};

export default Splash;
