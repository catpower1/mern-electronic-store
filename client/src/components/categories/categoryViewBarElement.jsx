import React from "react";
import styled from "styled-components";

const ViewBarElement = styled.div`
    display: flex;
    width: min-content;
    min-height: 0.5cm;
    background-color: rgba(200,200,200,0.5);
    transition: background-color 0.3s ease;
    border-radius: 10px;
    margin: 5px;
    padding: 4px;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,0.3);
    }
    & > span{
        color: black;
        font-size: 1rem;
        font-weight:500;
    }
    & > img{
        display: flex;
        justify-content: center;
        width: 10px;
        height: 10px;
        margin: 6px 0px 5px 5px;
    }
`;

function CategoryViewBarElement({title}){
    return(
        <ViewBarElement>
            <span>{title}</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cancel_icon.svg/1200px-Cancel_icon.svg.png" alt="no img"/>
        </ViewBarElement>
    );
}

export default CategoryViewBarElement;