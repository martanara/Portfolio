import styled from "styled-components";

export const StyledIconButton = styled.div`
    display: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 27px;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }
`;
