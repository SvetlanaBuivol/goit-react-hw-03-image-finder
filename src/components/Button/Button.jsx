import React from "react";
import { LoadMore } from "./Button.styled";

const Button = ({onClick}) => {
    return (
     <LoadMore onClick={onClick} type="button">Load more</LoadMore>
 )
}

export default Button;