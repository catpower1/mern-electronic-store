import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Card from "../cardComponent";
import ProductStore from "../../store/productStore";
import CategoryStore from "../../store/categoryStore";
import data from "../../config.json";
import PagesNavigator from "./pagesNavigator";
import PageStore from "../../store/pageStore";

const ContentBar = styled.div`
    display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: flex-start;
    gap: 5em;
    flex-wrap: wrap;
    padding: 2em;
`;

function Content(){
    const products = ProductStore(state => state.products);
    const setProducts = ProductStore(state => state.setProducts);
    const categories = CategoryStore(state => state.categories);
    const page = PageStore(state => state.page);
    
    useEffect(()=>{
        async function fetchData(){
            try{
                if(categories.length === 0){
                    await fetch(`https://${data.server.host}:${data.server.port}/product/products/${page}`)
                    .then(res => res.json())
                    .then(resData => setProducts(resData))
                    .catch(error => console.error('Fetch error:', error));
                }
                else{
                    await fetch(`https://${data.server.host}:${data.server.port}/product/categoryProducts`,{
                        method : "POST",
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        body: JSON.stringify({categories: categories})
                    })
                    .then(res => res.json())
                    .then(resData => setProducts(resData))
                    .catch(error => console.error('Fetch error:', error));
                }  
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    },[categories,setProducts,page])

    return(
        <ContentBar>
            {products ? 
                (products.map(item => (
                    <Card key={item._id} id={item._id} brand={item.brand} model={item.model} price={item.price} photo={item.photos[0]}/>
                ))) : (<div>Loading...</div>)
            }
            <PagesNavigator/>
        </ContentBar>
    );
}

export default Content;