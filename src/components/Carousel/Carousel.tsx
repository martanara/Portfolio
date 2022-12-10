import React from "react";
import { Carousel } from "primereact/carousel";
import { StyledCarouselItem } from "./Carousel.styles";

const photos = [1, 2, 3, 4, 5, 6, 7, 8];

const CarouselDemo = () => {
    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const itemTemplate = () => {
        return (
            <StyledCarouselItem>
                <h3>Hello</h3>
            </StyledCarouselItem>
        );
    };

    return (
        <Carousel
            value={photos}
            numVisible={3}
            numScroll={1}
            itemTemplate={itemTemplate}
            responsiveOptions={responsiveOptions}
        />
    );
};

export default CarouselDemo;
