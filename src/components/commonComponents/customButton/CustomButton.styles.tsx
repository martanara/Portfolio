import styled from "styled-components";

interface IButtonProps {
    variant?: string;
}

export const StyledButton = styled.button<IButtonProps>`
    border: 2px solid ${props => props.theme.teal};
    border-radius: 5%;
    background-color: ${(props) => (props.variant === "outline" ? props.theme.colors.white : props.theme.colors.teal)};
    color: ${(props) => (props.variant === "outline" ? props.theme.colors.teal : props.theme.colors.white)};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: ${(props) => (props.variant !== "outline" ? props.theme.colors.white : props.theme.colors.teal)};
        color: ${(props) => (props.variant !== "outline" ? props.theme.colors.teal : props.theme.colors.white)};
    }
`;
