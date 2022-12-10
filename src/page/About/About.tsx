import React from "react";

import Carousel from "components/Carousel";
import Wrapper from "components/Wrapper";
import { StyledAbout, StyledBottomSection, StyledDescription, StyledMyPhoto, StyledTopSection } from "./About.styles";
import { Lorem } from "./Lorem";

const About = () => {
    return (
        <React.Fragment>
            <StyledAbout>
                <Wrapper>
                    <StyledTopSection>
                        <h2>01. About</h2>
                        <StyledMyPhoto>Img</StyledMyPhoto>
                        <StyledDescription>
                            <Lorem />
                        </StyledDescription>
                    </StyledTopSection>
                    <StyledBottomSection>
                        <Carousel />
                    </StyledBottomSection>
                </Wrapper>
            </StyledAbout>
        </React.Fragment>
    );
};

export default About;
