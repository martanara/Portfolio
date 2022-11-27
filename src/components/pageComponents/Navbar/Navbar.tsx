import React, { useState } from "react";
import IconButton from "../../commonComponents/IconButton/IconButton";
import { StyledNav, StyledLogo, StyledMenu, StyledNavlink } from "./Navbar.styles";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <StyledNav>
            <StyledLogo href="" img="/marta_nara-logo.png"></StyledLogo>
            <IconButton icon={isOpen ? "xmark" : "bars"} onClick={toggleMenu} />
            <StyledMenu isOpen={isOpen}>
                <StyledNavlink href="">About</StyledNavlink>
                <StyledNavlink href="">Portfolio</StyledNavlink>
                <StyledNavlink href="">Contact</StyledNavlink>
            </StyledMenu>
        </StyledNav>
    );
};
