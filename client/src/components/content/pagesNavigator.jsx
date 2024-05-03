import React from "react";
import styled from "styled-components";
import { CustomButton1 } from "../../styles/buttonStyles";
import PageStore from "../../store/pageStore";

const PagesNavigatorDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: calc(100% - 4%);
    padding: 2%;
    height: 1cm;
    gap: 10px
`;

function PagesNavigator(){
    const setPage = PageStore(state => state.setPage);
    
    return(
        <PagesNavigatorDiv>
            <CustomButton1 onClick={()=>setPage(1)}>1</CustomButton1>
            <CustomButton1 onClick={()=>setPage(2)}>2</CustomButton1>
        </PagesNavigatorDiv>
    );
}

export default PagesNavigator;