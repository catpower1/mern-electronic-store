import { create } from "zustand";

const CategoryStore = create((set)=>({
    categories : [],
    add : (newCategory) => set((state) => ({
        categories: [...state.categories, newCategory]
    })),
    remove : (deleteCategory) => set((state) => ({
        categories: state.categories.filter(item => item !== deleteCategory)
    })),
    clear : () => set({ 
        categories: [] 
    })
}));

export default CategoryStore;