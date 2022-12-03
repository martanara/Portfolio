import React, { MouseEventHandler } from "react";
import { StyledIconButton } from "./IconButton.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconButtonProps {
  onClick?: MouseEventHandler;
  icon: IconProp;
}

const IconButton = (props: IconButtonProps) => {
    const { onClick, icon } = props;

    return (
        <StyledIconButton onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </StyledIconButton>
    );
};

export default IconButton;
