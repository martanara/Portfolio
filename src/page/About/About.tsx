import React from "react";

import Button from "components/Button";
import { StyledButton } from "./About.styles";
import Carousel from "components/Carousel";

const About = () => {
    return (
        <React.Fragment>
            <p>About</p>
            <Carousel />
            <StyledButton variant="outline" fontColor="yellow">
                Styled Button
            </StyledButton>
            <Button variant="outline">Styled Button</Button>
            <Button variant="outline">Styled Button</Button>
        </React.Fragment>
    );
};

export default About;
