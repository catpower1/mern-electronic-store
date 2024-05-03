import React from "react";
import { CustomButton1 } from "../styles/buttonStyles";

function Button(props){
    return(
        <CustomButton1 onClick={props.onClick}>{props.value}</CustomButton1>
    );
}

export default Button;