import React, { useContext } from 'react';
import {  Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';

function Copyright(props: any) {
  const context = useContext(LayoutContext);
  const { darkMode } = context;
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link style={{ color: darkMode == true ? "black" : "#FF6347"  }} to="/">
        Victor Ciolac
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function MainText(props: any) {
  return (
    <Typography sx={{ ml: 1, mr: -6 }} variant="caption" component="h2">
     ⎇ main
    </Typography>
  );
}

function FooterIcons(props: any) {
  const context = useContext(LayoutContext);
  const { darkMode, toogleDarkMode } = context;
  const icon = darkMode ? '☀️' : '🌙';
  return (
    <Typography onClick={toogleDarkMode} sx={{ ml: -1, mr: 2, cursor: 'pointer' }} variant="caption" component="h2">
      {icon}
    </Typography>
  );
}

function Footer() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isLoading } = useContext(LoaderContext);
  const { darkMode } = useContext(LayoutContext);

  if (isLoading) return null;

  return (
    <Box 
      sx=
      {{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        maxHeight: '3vh', 
        backgroundColor: !darkMode ? '#272727' : '#C0C0C0',
        display: 'flex',
        zIndex: 10000,
      }} 
       ref={ref}
       >
      <MainText />
      <Copyright sx={{ pl: 3, flexGrow: 1 }} />
      <FooterIcons />
    </Box>
  );
};

export default Footer;
