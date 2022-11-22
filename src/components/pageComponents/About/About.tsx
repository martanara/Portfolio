import React from "react";

import CustomButton from "../../commonComponents/customButton/CustomButton";

import "./About.scss";

const About = () => {
    return (
        <>
            <p>About</p>
            <CustomButton variant="outline" as="a">Styled Button</CustomButton>
        </>
    );
};

export default About;
