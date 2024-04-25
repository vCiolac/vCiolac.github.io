import React, { Fragment, useContext } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Grid, CardActionArea, CardContent, Typography, CardActions, Box, Card, Button, useMediaQuery } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import News from '../../assets/images/news.png';
import NewsPhome from '../../assets/images/termo-phone.png';
import Portf from '../../assets/images/port.png';
import PortfPhone from '../../assets/images/port-phone.png';
import Recip from '../../assets/images/recipe.png';
import Recipe from '../../assets/images/recipes-phone.png';
import Reci from '../../assets/images/recip-phone.png';
import Cyos from '../../assets/images/cyo.png';
import CyoPhone from '../../assets/images/cyo-phone.png';
import Swars from '../../assets/images/swars.png';
import Pixel from '../../assets/images/pixel-art.png';
import PixelPhone from '../../assets/images/pixel-phone.png';
import pid0 from '../../assets/images/pid0.jpeg';
import pid1 from '../../assets/images/pid1.jpeg';
import pid2 from '../../assets/images/pid2.jpeg';
import pid3 from '../../assets/images/pid3.jpeg';


const projects = [
  {
    name: "Jogo Pigeon Adventure",
    description: `Jogo desenvolvido tanto para desktop quanto para celular, onde o jogador controla um pombo durante sua jornada.
    O objetivo do jogo é coletar o maior número de moedas possíveis, evitando obstáculos e inimigos.
    O jogo foi desenvolvido com Godot 4.`,
    images: [
      pid0,
      pid1,
      pid2,
      pid3,
    ],
    links: {
      github: "https://github.com/vCiolac/first-godot-game",
      deploy: "https://vciolac.itch.io/pigeon-adventure",
    },
  },
  {
    name: "Jogo Choose Your Own - Aventura em Texto",
    description: `Meu primeiro projeto de jogo, ele se baseia em uma aventura por texto desenvolvido exclusivamente em JavaScript.'
    'O jogo oferece aos jogadores a oportunidade de tomar decisões que influenciam diretamente o rumo da história. 
      Cada escolha leva a diferentes desfechos, junto de novas imagens e sons tornando a experiência altamente interativa!`,
    images: [
      CyoPhone,
      Cyos,
    ],
    links: {
      github: "https://github.com/vCiolac/vCiolac.github.io/tree/main/cyo",
      deploy: "https://vciolac.github.io/cyo/",
    },
  },
  {
    name: "Site Pessoal - Portfólio",
    description: `Meu incrível site pessoal, inspirado no Visual Studio Code, onde você está agora!!`,
    images: [
      Portf,
      PortfPhone,
    ],
    links: {
      github: "https://github.com/vCiolac/vCiolac.github.io/tree/main/port-vscode",
      deploy: "https://vciolac.vercel.app/",
    },
  },
  {
    name: "Recipes App",
    description: `Neste projeto, voltado para celular, a pessoa que estiver utilizando o app pode criar um login e então ter acesso a uma
     variedade de receitas com base em diferentes critérios, é possível favoritar, fazer, salvar e compartilhar receitas,
     entre outras funcionalidades.`,
    images: [
      Reci,
      Recip,
      Recipe,
    ],
    links: {
      github: "https://github.com/vCiolac/recipes-app",
      deploy: "https://recipes-app-vciolac.vercel.app/",
    },
  },
  {
    name: "Journal App",
    description: `Este é um projeto React que permite aos usuários acessarem notícias mais recentes do 
    Instituto Brasileiro de Geografia e Estatística (IBGE). Os usuários podem ler as notícias completas, 
    favoritar as notícias de seu interesse, filtrar as notícias por título e tipo. 
    E também ver a informação de sua data e há quantos dias atrás cada notícia foi publicada.`,
    images: [
      NewsPhome,
      News,
    ],
    links: {
      github: "https://github.com/vCiolac/journalNews",
      deploy: "https://termo-news.vercel.app/",
    },
  },
  {
    name: "Project Star Wars",
    description: `Um dos meus primeiros projetos, onde foi desenvolvido uma lista com filtros de planetas do universo 
    Star Wars usando Context API e Hooks para controlar os estados globais.`,
    images: [
      Swars,
    ],
    links: {
      github: "https://github.com/vCiolac/trybe-starwars",
    },
  },
  {
    name: "Project Pixel Art",
    description: `Meu primeiro projeto, é uma representação simples, 
    minimalista e divertida, oferecendo uma plataforma para pintar imagens com pixels.`,
    images: [
      PixelPhone,
      Pixel,
    ],
    links: {
      github: "https://github.com/vCiolac/vCiolac.github.io/tree/main/project-pixel-art",
      deploy: "https://vciolac.github.io/project-pixel-art/",
    },
  },
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    maxWidth: 360,
    margin: "2rem auto",
  },
  phoneCards: {
    margin: "0.7rem",
  },
};

function Projects() {
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

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box component="div" sx={styles.mainContainer}>
      <Typography sx={{ color: "tan", fontFamily: "Jost", ml: 2.5 }} variant="overline">
        Meus projetos
      </Typography>
      <Grid container spacing={1}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card sx={!isMobile ? styles.cardContainer : styles.phoneCards}>
              <CardActionArea>
                <Carousel showThumbs={false}>
                  {project.images.map((image, index) => (
                    <div key={index}>
                      <a href={project.links.deploy} target="_blank">
                        <div>
                          <img
                            alt={`Project ${i + 1}`}
                            src={image}
                            style={{ maxHeight: "250px", objectFit: "contain" }}
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </Carousel>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {project.links.deploy && <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={project.links.deploy}
                  target="_blank"
                >
                  Deploy
                </Button>}

                <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={project.links.github}
                  target="_blank"
                >
                  Repositório Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects