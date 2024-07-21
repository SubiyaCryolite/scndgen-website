import create from "zustand";

export const useAppLink = create((set) => ({
  active: {},
  setActive: (active) => set({ active }),
}));
