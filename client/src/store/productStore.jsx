import { create } from "zustand";

const ProductStore = create((set)=>({
    products : [],
    setProducts : (newProducts) => set(() =>({
        products: newProducts
    }))
}));

export default ProductStore;