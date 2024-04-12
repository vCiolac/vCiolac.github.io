import { createContext } from 'react';

export type LayoutPropsContext = {
  showCodeContent: boolean;
  toggleCodeContent: () => void;
  darkMode: boolean;
  toogleDarkMode: () => void;
};

export const LayoutContext = createContext({} as LayoutPropsContext);
