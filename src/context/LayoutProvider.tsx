import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { LayoutContext } from './LayoutContext';

type LayoutProviderProps = {
  children: React.ReactNode;
};

function LayoutProvider({ children }: LayoutProviderProps) {
  const [showCodeContent, setShowCodeContent] = useState(true);
  const [darkMode, turnDarkMode] = useState(false);

  const toggleCodeContent = () => {
    setShowCodeContent(!showCodeContent);
  };

  const toogleDarkMode = () => {
    turnDarkMode(!darkMode);
  }

  return (
    <LayoutContext.Provider value={{ 
      showCodeContent, 
      toggleCodeContent, 
      darkMode, 
      toogleDarkMode, 
      }}>
      <Layout>
        {children}
      </Layout>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;


