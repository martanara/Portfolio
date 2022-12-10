import React, { useState } from "react";
import { StyledNav, StyledLogo, StyledMenu, StyledNavLink, StyledIconButton } from "./Navbar.styles";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <StyledNav>
            <StyledLogo href="">
                <p>Marta Nara</p>
            </StyledLogo>
            <StyledIconButton icon={isOpen ? "xmark" : "bars"} onClick={toggleMenu} />
            <StyledMenu isOpen={isOpen}>
                <StyledNavLink href="">About</StyledNavLink>
                <StyledNavLink href="">Portfolio</StyledNavLink>
                <StyledNavLink href="">Contact</StyledNavLink>
            </StyledMenu>
        </StyledNav>
    );
};

export default Navbar;
