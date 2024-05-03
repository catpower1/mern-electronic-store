import styled from "styled-components";

export const CustomButton1 = styled.button`
    background: #FFF5EE;
    color: black;
    font-size: 1em;
    font-weight: 600;
    padding: 0.25em 1em;
    border: 3px solid black;
    border-radius: 3px;
    cursor: pointer;
    white-space: nowrap;
    &:hover{
        background-color: #FBCEB1;
    }
`;

export const BasketButton = styled.button`
    display: flex;
    width: 3em;
    height: auto;
    border: 3px solid black;
    background-image: url("https://cdn-icons-png.flaticon.com/128/2636/2636640.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`;