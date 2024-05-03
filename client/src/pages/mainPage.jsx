import React from "react";
import Header from "../components/header/header";
import ContentBody from "../components/content/contentBody";
import Footer from "../components/footerComponent";

function MainPage(){
    return(
        <div>
            <Header/>
            <ContentBody/>
            <Footer/>
        </div>
    );
}

export default MainPage;