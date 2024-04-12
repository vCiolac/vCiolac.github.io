import { createContext } from 'react';

export type LoaderPropsContext = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoaderContext = createContext({} as LoaderPropsContext);
