import React from "react";

import "./Container.scss";

interface IProps {
    children: JSX.Element[];
}

const Container = (props: IProps) => {
    return <div>
        {props.children}
    </div>;
};

export default Container;
