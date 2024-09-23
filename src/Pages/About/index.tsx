import React, { Fragment, useContext } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import { codeString } from './codeString'
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Box, Typography, Container, Avatar, Grid, useMediaQuery } from '@mui/material';
import JsIcon from '../../assets/icons/js-icon.svg';
import HtmlIcon from '../../assets/icons/html-icon.svg';
import CssIcon from '../../assets/icons/css-icon.svg';
import ReactIcon from '../../assets/icons/react-icon.svg';
import TsIcon from '../../assets/icons/ts-logo.svg';
import NodeIcon from '../../assets/icons/node-js.svg';
import ProfilePic from '../../assets/images/profile-pic.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function About() {
  const { showCodeContent } = useContext(LayoutContext);
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
  const headerStyles = {
    title: {
      color: "tomato",
      fontFamily: "Jost",
    },
    beforeTitle: {
      color: "tan",
      fontFamily: "Jost",
    },
    subtitle: {
      color: "d0d0d0",
      fontFamily: "Roboto",
      fontWeight: '300',
    },
    margin: {
      marginTop: "1rem",
    },
    typedContainer: {
      marginTop: '1rem',
      width: isMobile ? "85vw" : "90vw",
      zIndex: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth='lg' sx={{ mb: 4 }}>
        <Box sx={headerStyles.typedContainer}>
          <Typography sx={headerStyles.beforeTitle} variant="overline">
            Sobre mim
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 1 }} >
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Typography sx={headerStyles.subtitle} variant="body1">
                Eu me chamo <span style={{ color: 'tomato', fontWeight: 'bold' }}>Victor Ciolac</span>.
                Sou um desenvolvedor web full stack e atualmente trabalho como freelancer, criando sites e soluções personalizadas para meus clientes.
                <br />
                <br />
                Estou sempre buscando novos desafios e oportunidades para aplicar minhas habilidades em projetos reais.
                <br />
                Se você está procurando um desenvolvedor para criar ou aprimorar seu site, estou disponível para trabalho.
                <br />
                <br />
                Tenho 29 anos e moro no Rio de Janeiro.
              </Typography>
              <Typography sx={headerStyles.margin} variant="subtitle1">
                Com uma experiência anterior em marcenaria e design criativo, minha abordagem para o desenvolvimento web é fortemente influenciada por minha capacidade de resolver problemas de forma criativa e encontrar soluções inovadoras.
                <br />
              </Typography>
              <Typography sx={[headerStyles.subtitle, headerStyles.margin]} variant="subtitle1">
                Minha jornada me levou ao domínio de tecnologias como <br />
                <img src={JsIcon} alt="JS" width={13} /> JavaScript, <img src={TsIcon} alt="TS" width={13} /> TypeScript, <img src={ReactIcon} alt="React" width={13} /> React
                , <img src={NodeIcon} alt="Node.Js" width={13} /> Node.js, entre outras. Confira todas as minhas habilidades na aba de <Link to={'/skills'} style={{ textDecoration: 'none', color: '#fff' }}>habilidades</Link>.
                <br />
                <br />
                Clique <Link style={{ textDecoration: 'none', color: '#fff' }} to={"/projects"}>aqui</Link> para ver alguns dos meus <Link style={{ textDecoration: 'none', color: '#fff' }} to={"/projects"}>projetos</Link>.
              </Typography>
              <Typography sx={[headerStyles.subtitle, headerStyles.margin]} variant="subtitle1">
                Se você está interessado em trabalhar comigo ou tem um projeto em mente, não hesite em entrar em contato!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar alt="Victor Ciolac" src={ProfilePic}
                sx={{ width: 280, height: 280 }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </motion.div>
  )
};

export default About
