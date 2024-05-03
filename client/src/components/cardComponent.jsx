import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BasketButton } from "../styles/buttonStyles";

const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 12em;
    height: 15em;
    border: 3px solid black;
    flex-shrink: 0;
    padding: 1em;
    margin-left: 1cm;
    img{
        width: auto; 
        height: auto; 
        max-width: 90%;
        max-height: 90%;
        cursor: pointer;
    }
    & > div:nth-child(2){
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > span{
            white-space: nowrap;
            font-size: large;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        & > div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            & > span{
                font-size: 1.5rem;
            }
        }
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    height: 70%;
    justify-content: center;
    align-items: center;
`

function Card({id,brand,model,price,photo}){
    return(
        <CardStyles>
            <StyledLink to={`product/${id}`}>
                <img src={photo} alt="img" title={brand + " " + model}/>
            </StyledLink>
            <div>
                <span>{brand} {model}</span>
                <div>
                    <span>{price}₴</span>
                    <BasketButton/>
                </div>
            </div>
        </CardStyles>
    );
}

export default Card;