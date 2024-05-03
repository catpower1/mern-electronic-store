import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ProductPage from "./pages/productPage";
import UserPage from "./pages/userPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/user/:username" element={<UserPage/>}/>
        <Route path="*" element={<>Not found</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
