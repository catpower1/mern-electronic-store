import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 3cm;
    height: 85%;
    text-decoration: none;
    color: black;
    border: 3px black solid;
    background-color: #FFF5EE;
    & > span{
        font-size: 1.2em;
        font-weight: 600;
    }
    &:hover{
        background-color: #FBCEB1;
    }
`;

function UserPanel({ username }){
    return(
        <StyledLink to={`/user/${username}`}>
            <span>{username}</span>
        </StyledLink>
    );
}

export default UserPanel;