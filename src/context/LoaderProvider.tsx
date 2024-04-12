import React, { useState } from 'react';
import Loader from '../components/Loader/Loader';
import { LoaderContext } from './LoaderContext';

type LoaderProviderProps = {
  children: React.ReactNode;
};

function LoaderProvider({ children }: LoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{
      isLoading,
      setIsLoading,
    }}>
        {isLoading && <Loader />}
        {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;


