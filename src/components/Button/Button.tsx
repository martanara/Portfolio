import { StyledButton } from "./Button.styles";

interface ButtonProps {
    fontColor?: string;
    variant?: string;
    className?: string;
    children: string;
    type?: "button" | "submit";
    disabled?: boolean;
}

const Button = (props: ButtonProps) => (
    <StyledButton
        className={props.className}
        fontColor={props.fontColor}
        variant={props.variant}
        type={props.type}
        disabled={props.disabled}
    >
        {props.children}
    </StyledButton>
);

export default Button;
