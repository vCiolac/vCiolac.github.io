import React, { useContext, Fragment } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';
import { LayoutContext } from '../../context/LayoutContext';
import Particle from '../../components/Particles/Particles';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { LoaderContext } from '../../context/LoaderContext';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

function Home() {
  const { showCodeContent, darkMode } = useContext(LayoutContext);
  const { isLoading } = useContext(LoaderContext);
  const isMobile = useMediaQuery('(max-width: 600px)');

  if (isLoading) return null;

  if (!showCodeContent) {
    return (
      <Fragment>
        <CodeEditor codeString={codeString} />
      </Fragment>
    )
  }

  const headerStyles = darkMode === true ? {
    title: {
      color: "black",
      fontFamily: "Jost",
    },
    beforeTitle: {
      color: "white",
      fontFamily: "Jost",
    },
    subtitle: {
      color: "white",
      textTransform: "uppercase",
    },
    typedContainer: {
      mt: "16%",
      textAlign: "center",
      zIndex: 1,
    },
    mobileContainer: {
      textAlign: "center",
      mt: "45%",
      zIndex: 1,
    },
  } : {
    title: {
      color: "tomato",
      fontFamily: "Jost",
    },
    beforeTitle: {
      color: "#d0d0d0",
      fontFamily: "Jost",
    },
    subtitle: {
      color: "tan",
      textTransform: "uppercase",
    },
    typedContainer: {
      mt: "16%",
      textAlign: "center",
      zIndex: 1,
    },
    mobileContainer: {
      textAlign: "center",
      mt: "45%",
      zIndex: 1,
    },
  };

  const StyledMotionButton = styled(motion.button)`
    background-color:${ darkMode === true ? 'lightColor' : '#e63d1f'};
    border-radius:28px;
    border:1px solid ${ darkMode === true ? 'lightBorderColor' : '#942911'};
    display:inline-block;
    margin-top: 10px;
    color:${ darkMode === true ? 'black' : '#ffffff'};
    font-family:Arial;
    font-size:17px;
    padding:10px 23px;
    text-decoration:none;
    text-shadow:0px 1px 0px ${ darkMode === true ? 'lightShadowColor' : '#854629'};
`;

const StyledContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", 
  alignItems: "center",
}));

  return (
    <Fragment>
      <Particle />
      <Box>
        <Container maxWidth="lg" >
        <StyledContainer sx={isMobile ? headerStyles.mobileContainer : headerStyles.typedContainer}>
            <Typography sx={headerStyles.beforeTitle} variant="h6">
              Olá! Eu sou
            </Typography>
            <Typography sx={headerStyles.title} variant="h3">
              Victor Ciolac
            </Typography>
            <Typography sx={headerStyles.subtitle} variant="subtitle1">
              Desenvolvedor Full Stack
            </Typography>
            <Link to={'https://wa.me/5521992284002?text=Ol%C3%A1%21+Estou+entrando+em+contato+pelo+link+em+seu+Portf%C3%B3lio%21'}>
            <StyledMotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Entre em contato
            </StyledMotionButton>
            </Link>
            <Link to={'/projects'}>
            <StyledMotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Meus projetos
            </StyledMotionButton>
            </Link>
          </StyledContainer>
        </Container>
      </Box>
    </Fragment>
  )
};

export default Home