import React from "react";

import Button from "components/Button";
import { StyledButton } from "./About.styles";

const About = () => {
    return (
        <React.Fragment>
            <p>About</p>
            <StyledButton variant="outline" fontColor="yellow">Styled Button</StyledButton>
            <Button variant="outline">Styled Button</Button>
            <Button variant="outline">Styled Button</Button>
        </React.Fragment>
    );
};

export default About;
