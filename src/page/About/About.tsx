import React from "react";

import Carousel from "components/Carousel";
import Wrapper from "components/Wrapper";
import { StyledContainer } from "./About.styles";

const About = () => {
    return (
        <React.Fragment>
            <StyledContainer>
                <Wrapper>
                    <h2>01. About</h2>
                    <Carousel />
                </Wrapper>
            </StyledContainer>
        </React.Fragment>
    );
};

export default About;
