import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BodyBar } from "../content/contentBody";
import PhotoSlider from "./photoSlider";
import ProductDescription from "./productDescription";
import ProductTitle from "./productTitle";
import config from "../../config.json";


const ProductBodyBar = styled(BodyBar)`
    display: flex;
    width: calc(100% - 4%);
    flex-direction: column;
    justify-content: start;
    padding: 2%;
`;

const SliderDescriptionDiv = styled.div`
    display: flex;
    width: 100%;
    height: 10.15cm;
    flex-direction: row;
`



function ProductBody(){
    const [product, setProduct] = useState({});
    
    useEffect(()=>{;
        const id = window.location.pathname.split('/').pop();
        async function fetchData() {
            await fetch(`https://${config.server.host}:${config.server.port}/product/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data))
                .catch(error => console.log("Fetch error: ", error));
        }

        fetchData();
    },[]);

    return(
        <ProductBodyBar>
            <ProductTitle brand={product.brand} model={product.model}/>
            <SliderDescriptionDiv>
                <PhotoSlider images={product.photos}/>
                <ProductDescription desc={product.description} price={product.price}/>
            </SliderDescriptionDiv>
        </ProductBodyBar>
    );
}

export default ProductBody;