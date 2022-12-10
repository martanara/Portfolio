import React from "react";

import Wrapper from "components/Wrapper";
import { StyledLeftSection, StyledRightSection, StyledSplash } from "./Splash.styles";

const Splash = () => {
    return (
        <Wrapper>
            <StyledSplash>
                <StyledLeftSection>
                    <p>Hello, I'm Marta Nara</p>
                    <p>I'm a Web Developer based in Krakow, Poland</p>
                </StyledLeftSection>
                <StyledRightSection img="/2784258.jpg"></StyledRightSection>
            </StyledSplash>
        </Wrapper>
    );
};

export default Splash;
