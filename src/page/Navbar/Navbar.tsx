import React, { useState } from "react";
import IconButton from "../../components/IconButton";
import { StyledNav, StyledLogo, StyledMenu, StyledNavLink } from "./Navbar.styles";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <StyledNav>
            <StyledLogo href="" img="/marta_nara-logo.png" />
            <IconButton icon={isOpen ? "xmark" : "bars"} onClick={toggleMenu} />
            <StyledMenu isOpen={isOpen}>
                <StyledNavLink href="">About</StyledNavLink>
                <StyledNavLink href="">Portfolio</StyledNavLink>
                <StyledNavLink href="">Contact</StyledNavLink>
            </StyledMenu>
        </StyledNav>
    );
};
