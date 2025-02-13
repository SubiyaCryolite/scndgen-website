import { Context, createContext } from "react";

export interface ContextProps {
  active: string;
  setActive: (value: string) => void;
}

const initialValue: ContextProps = {
  active: "",
  setActive: () => {},
};

export const TabContext: Context<ContextProps> = createContext(initialValue);
