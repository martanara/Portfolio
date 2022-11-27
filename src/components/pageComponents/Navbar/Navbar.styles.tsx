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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

export const StyledNavlink = styled.a`
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        overflow: hidden;
        flex-direction: column;
        justify-content: space-evenly;
        height: 170px;
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

export const StyledLogo = styled.a<StyledLogoProps>`
    background-image: url(${({ img }) => img});
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 50px;
    margin: 20px 10px;
`;



