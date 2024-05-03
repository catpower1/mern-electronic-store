import { create } from "zustand";

const SignInUpStore = create((set) => ({
    isActive: false,
    setActive: () => set({ isActive: true }),
    setInactive: () => set({ isActive: false }),
}));

export default SignInUpStore;