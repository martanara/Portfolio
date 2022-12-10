import IconButton from "components/IconButton";
import styled from "styled-components";

interface StyledMenuProps {
    isOpen: boolean;
}

export const StyledNav = styled.div`
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => props.theme.colors.teal};
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
`;

export const StyledNavLink = styled.a`
    padding: 10px 0 10px 40px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;

    &:hover {
        color: ${(props) => props.theme.colors.mustard};
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const StyledMenu = styled.div<StyledMenuProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        flex-direction: column;
        justify-content: space-evenly;
        overflow: hidden;
        width: 100%;
        height: 170px;
        transition: max-height 0.3s ease-in;
    }
`;

export const StyledLogo = styled(StyledNavLink)`
   font-weight: 700;
   font-size: 20px;
`;

export const StyledIconButton = styled(IconButton)`
    display: none;
    
    @media (max-width: 768px) {
        display: flex;
    }
`;



