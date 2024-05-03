import React from "react";
import styled from "styled-components";
import { CustomButton1 } from "../../styles/buttonStyles";

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 5cm;
    min-width: 7cm;
    flex-grow: 1;
    height: auto;
    border: 3px solid black; 
    border-left: #FFF5EE; 
    padding: 2%;
    
    & > span{
        flex: 1;
        font-size: 1.2em;
        font-weight: 600;
        overflow: hidden;
    }
    & > div{
        height: 1cm;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span{
            font-size: 2em;
            font-weight: 600;
        }
    }
`;

function ProductDescription({desc,price}){
    return(
        <Description>
            <span>{desc}</span>
            <div>
                <span>{price}₴</span>
                <CustomButton1>Add to basket</CustomButton1>
            </div>
        </Description>
    )
}

export default ProductDescription;