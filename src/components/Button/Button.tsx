import { StyledButton } from "./Button.styles";

interface ButtonProps {
    fontColor?: string;
    variant?: string;
    className?: string;
    children: string;
  }

const Button = (props: ButtonProps) => (
    <StyledButton className={props.className} fontColor={props.fontColor} variant={props.variant}>
        {props.children}
    </StyledButton>
);

export default Button;
