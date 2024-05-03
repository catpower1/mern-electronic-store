import React from "react";
import styled from "styled-components";

const StyledProductTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 6px - 4%);
    padding: 2%;
    height: 1cm;
    border: 3px solid black; 
    border-bottom: #FFF5EE;
    & > span{
        font-size: 1.8em;
        font-weight: 700;
    }
`;

function ProductTitle({brand,model}){
    return(
        <StyledProductTitle>
            <span>{brand} {model}</span>
        </StyledProductTitle>
    )
}

export default ProductTitle;