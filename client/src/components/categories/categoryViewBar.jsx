import React, { useEffect } from "react";
import styled from "styled-components";
import CategoryViewBarElement from "./categoryViewBarElement";
import CategoryStore from "../../store/categoryStore";


const ViewBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 0;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom: 3px solid black;
`;

function CategoryViewBar(){
    const categories = CategoryStore(state => state.categories);

    useEffect(()=>{
        
    },[categories]);
    
    return(
        <ViewBar>
            {categories && categories.length > 0 ? (
                categories.map(item => <CategoryViewBarElement title={item} />)
            ) : (
                null
            )}
        </ViewBar>
    );
}

export default CategoryViewBar;