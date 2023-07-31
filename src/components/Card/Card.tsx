import React from "react";

import { StyledCardWrapper } from "./Card.styles";

interface ICardProps {
    text: string;
}

const Card = (props: ICardProps) => {
    return (
        <StyledCardWrapper>
            <p>{props.text}</p>
        </StyledCardWrapper>
    );
};

export default Card;
