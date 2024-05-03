import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategotyElement from "./categoryElement";
import data from "../../config.json";

const List = styled.ul`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 0;
`;

function CategoriesList(){
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            await fetch(`https://${data.server.host}:${data.server.port}/product/categories`,{
                headers: {
                    "Access-Control-Allow-Origin" : "*"
                }
            })
                .then(res => res.json())
                .then(res=> setCategories(res))
                .catch(error => console.log(error));
        }

        fetchData();
    },[]);

    return(
        <List>
            {categories ? categories.map(item=><CategotyElement title={item}/>) : (<div>Loading...</div>)}
        </List>
    );
}

export default CategoriesList;