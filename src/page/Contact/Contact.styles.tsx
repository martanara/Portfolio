import styled, { css } from "styled-components";

interface IStyledErrorMessageProps {
    show: string;
}

export const StyledContact = styled.div`
    padding: 20px 0;
    height: 100vh;
    background-color: ${(props) => props.theme.background.teal};
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 10px;  
    width: 50%;
`;

export const TextArea = styled.textarea`
    padding: 10px;  
    width: 50%;
    resize: none;
    height: 100px;
`;

export const ErrorMessage = styled.div`
    display: inline-block;
`;

export const FormDiv = styled.div`
    text-align: center;
    margin: 20px auto;
`;