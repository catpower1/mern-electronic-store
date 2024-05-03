import React from "react";
import styled from "styled-components";
import CategoriesList from "./categoriesList";
import CategoryViewBar from "./categoryViewBar";

const CategoryStyle = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    border-right: 3px solid black;
    justify-content: flex-start;
`;

function Category(){
    return(
        <CategoryStyle>
            <CategoryViewBar/>
            <CategoriesList/>
        </CategoryStyle>
    );
}

export default Category;