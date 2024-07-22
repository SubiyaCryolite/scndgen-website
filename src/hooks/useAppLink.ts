import {create} from "zustand";

interface AppLinkState {
  active: object;
  setActive: (active: object) => void;
}

export const useAppLink = create<AppLinkState>((set) => ({
  active: {},
  setActive: (active) => set({ active }),
}));
