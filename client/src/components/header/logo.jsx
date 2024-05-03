import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoDiv = styled.div`
    background-image: url("../logo.png");
    min-width: 185px;
    min-height: 48px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
`;

function Logo(){
    return(
        <Link to="/">
            <LogoDiv/>
        </Link>
    );
}

export default Logo;