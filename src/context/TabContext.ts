import { createContext } from "react";

export interface ContextProps {
  active: any;
  setActive: (value: object) => void;
}

const initialValue: ContextProps = {
  active: {},
  setActive: () => {},
};

export const TabContext = createContext(initialValue);
