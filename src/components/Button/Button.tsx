import { StyledButton } from "./Button.styles";

const Button = (props: any) => (
    <StyledButton className={props.className} fontColor={props.fontColor} variant={props.variant}>
        {props.children}
    </StyledButton>
);

export default Button;
