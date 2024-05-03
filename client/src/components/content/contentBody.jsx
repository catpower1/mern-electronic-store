import React from "react";
import styled from "styled-components";
import Category from "../categories/categoryBody";
import Content from "./contentComponent";

export const BodyBar = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: #FFF5EE;
`;

function ContentBody(){
    return(
        <BodyBar>
            <Category/>
            <Content/>
        </BodyBar>
    );
}

export default ContentBody;