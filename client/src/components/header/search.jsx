import React from "react";
import Button from "../buttonComponent";
import styled from "styled-components";

const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    & > input{
        min-width: 7cm;
        outline: none;
        border: 3px solid black;
        border-right: none;
    }
    & > input:hover{
        outline: none;
    }
`;

function Search(){
    return(
        <SearchBar>
            <input type="text" placeholder="Seach"/>
            <Button value="Search"/>
        </SearchBar>
    );
}

export default Search;