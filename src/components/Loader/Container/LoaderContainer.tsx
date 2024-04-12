import React, { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { LoaderContext } from "../../../context/LoaderContext";

type LoaderContainerProps = {
    children: ReactNode;
};

const LoaderContainer = ({ children }: LoaderContainerProps) => {
  const { setIsLoading } = useContext(LoaderContext);

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#022203',
    zIndex: 10000,
  };

  return (
    <motion.div
      style={{margin: '0 auto'}}
      initial={{
        y: 0,
      }}
      animate={{
        y: "-100vh",
      }}
      transition={{
        delay: 4.2,
        duration: 0.3,
      }}
      onAnimationComplete={(definition) => {
        setIsLoading(false);
      }}
    >
      <Box sx={containerStyle}>{children}</Box>
    </motion.div>
  );
};

export default LoaderContainer;
