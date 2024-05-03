import { create } from "zustand";

const tokenStore = create((set)=>({
    token: "",
    setToken : (newToken) => set(()=>({
        token : newToken
    })),
    clearToken : () => set(() => ({
        token : ''
    }))
}));

export default tokenStore;