import React, { useContext, Fragment } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';
import { LayoutContext } from '../../context/LayoutContext';
import Particle from '../../components/Particles/Particles';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LoaderContext } from '../../context/LoaderContext';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

function Home() {
  const { showCodeContent, darkMode } = useContext(LayoutContext);
  const { isLoading } = useContext(LoaderContext);

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
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "90vw",
      textAlign: "center",
      zIndex: 1,
    },
    mobileContainer: {
      width: "80vw",
      textAlign: "center",
      mt: "45%",
      zIndex: 1,
      left: '50%',
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
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "90vw",
      textAlign: "center",
      zIndex: 1,
    },
    mobileContainer: {
      width: "80vw",
      textAlign: "center",
      mt: "45%",
      zIndex: 1,
      left: '50%',
    },
  };

  const StyledMotionButton = styled(motion.button)`
    background-color:${ darkMode === true ? 'lightColor' : '#e63d1f'};
    border-radius:28px;
    border:1px solid ${ darkMode === true ? 'lightBorderColor' : '#942911'};
    display:inline-block;
  margin-top: 10px;
  margin-right: 10px;
    color:${ darkMode === true ? 'black' : '#ffffff'};
    font-family:Arial;
    font-size:17px;
    padding:10px 23px;
    text-decoration:none;
    text-shadow:0px 1px 0px ${ darkMode === true ? 'lightShadowColor' : '#854629'};
`;

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Fragment>
      <Particle />
      <Box>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: isMobile ? '862px' : 'auto' }}>
          <Box sx={isMobile ? headerStyles.mobileContainer : headerStyles.typedContainer}>
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
          </Box>
        </Container>
      </Box>
    </Fragment>
  )
};

export default Home