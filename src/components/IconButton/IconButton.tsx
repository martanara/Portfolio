import React, { MouseEventHandler } from "react";
import { StyledIconButton } from "./IconButton.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconButtonProps {
  onClick?: MouseEventHandler;
  dark?: boolean;
  icon: IconProp;
}

const defaultProps = {
    onClick: () => {}
}

const IconButton = (props: IconButtonProps) => {
    const { onClick, icon, dark } = props;

    return (
        <StyledIconButton onClick={onClick} dark={dark}>
            <FontAwesomeIcon icon={icon} />
        </StyledIconButton>
    );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
