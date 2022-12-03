import styled from "styled-components";

interface StyledMenuProps {
    isOpen: boolean;
}

interface StyledLogoProps {
    img: string;
}

export const StyledNav = styled.div`
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => props.theme.colors.teal};
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

export const StyledLogo = styled.a<StyledLogoProps>`
    width: 200px;
    height: 45px;
    margin: 15px 10px;
    background-image: url(${({ img }) => img});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;



