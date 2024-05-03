import { create } from "zustand";

const PageStore = create((set)=>({
    page: 1,
    setPage: (newPage) => set(()=>({
        page : newPage
    }))
}));

export default PageStore;