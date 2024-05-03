import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footerComponent";
import ProductBody from "../components/product/productBody";

function ProductPage(){
    return(
        <div>
            <Header/>
            <ProductBody/>
            <Footer/>
        </div>
    );
}

export default ProductPage;