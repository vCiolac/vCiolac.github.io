import React, { Fragment, useContext } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import { codeString } from './codeString'
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Box, Typography, Container, Avatar, Grid } from '@mui/material';
import JsIcon from '../../assets/icons/js-icon.svg';
import HtmlIcon from '../../assets/icons/html-icon.svg';
import CssIcon from '../../assets/icons/css-icon.svg';
import ReactIcon from '../../assets/icons/react-icon.svg';
import TsIcon from '../../assets/icons/ts-logo.svg';
import NodeIcon from '../../assets/icons/node-js.svg';
import ProfilePic from '../../assets/images/profile-pic.png'
import { Link } from 'react-router-dom';


function About() {
  const { showCodeContent } = useContext(LayoutContext);
  const { isLoading } = useContext(LoaderContext);

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
      width: "90vw",
      zIndex: 1,
    },
  };

  return (
    <Fragment>
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Box sx={headerStyles.typedContainer}>
          <Typography sx={headerStyles.beforeTitle} variant="overline">
            Sobre mim
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Typography sx={headerStyles.subtitle} variant="body1">
                Eu me chamo <span style={{ color: 'tomato', fontWeight: 'bold' }}>Victor Ciolac</span>.
                Sou um desenvolvedor web full stack.
                <br />
                Atualmente, estou aprimorando minhas habilidades em ASP.NET e C# através do curso de Desenvolvimento Web da 
                <span style={{ color: 'green' }}> Trybe</span>
                , além de consolidar minha expertise em JavaScript, TypeScript, React e Node.js.
                <br />
                <br />
                Tenho 29 anos e moro no Rio de Janeiro.
              </Typography>
              <Typography sx={headerStyles.margin} variant="subtitle1">
                Em minha experiência profissional anterior, como marceneiro e designer criativo, enfrentei desafios
                complexos no mundo da marcenaria, buscando sempre soluções criativas na execução dos projetos.
                Essa capacidade de pensar de forma criativa e solucionar problemas agora se traduzem diretamente
                na minha abordagem de desenvolvimento web.
              </Typography>
              <Typography sx={[headerStyles.subtitle, headerStyles.margin]} variant="subtitle1">
                Minha jornada nos estudos me levou ao domínio de tecnologias como <br />
                <img src={JsIcon} alt="JS" width={13} /> JavaScript, <img src={TsIcon} alt="TS" width={13} /> TypeScript,  <img src={ReactIcon} alt="React" width={13} /> React
                , <img src={NodeIcon} alt="Node.Js" width={13} />  Node.js, entre outras. Você pode conferir todas na aba de <Link to={'/skills'} style={{ textDecoration: 'none', color: '#fff' }}>habilidades</Link> .
                <br/>
                Através de <Link style={{textDecoration: 'none', color: '#fff'}} to={"/projects"}>projetos</Link> práticos, pude aplicar os conceitos que aprendi e continuo explorando novas
                fronteiras na programação.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <Avatar alt="Victor Ciolac" src={ProfilePic}
                sx={{ width: 280, height: 280 }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
};

export default About
