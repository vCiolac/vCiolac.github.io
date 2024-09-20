import React, { Fragment, useContext, useState } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Grid, CardActionArea, CardContent, Typography, CardActions, Box, Card, Button, useMediaQuery, Icon } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    margin: "2rem auto",
    maxHeight: "80vh",
  },
  phoneCards: {
    margin: "0.7rem",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  },
  descriptionCard: {
    height: "10rem",
    overflowY: "auto",
  },
  contentCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: "0.5rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
  },
  category: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0",
  },
  categoryButton: {
    margin: "0 0.5rem",
  },
};

function Projects() {
  const { showCodeContent } = useContext(LayoutContext);
  const { isLoading } = useContext(LoaderContext);
  const [selectedCategory, setSelectedCategory] = useState('Todos os Projetos');

  if (isLoading) return null;

  if (!showCodeContent) {
    return (
      <Fragment>
        <CodeEditor codeString={codeString} />
      </Fragment>
    )
  }

  const isMobile = useMediaQuery('(max-width: 600px)');

  const categories = [
    'Todos os Projetos',
    ...Array.from(new Set(projects.map(project => project.category)))
  ];

  const filteredProjects = projects.filter(project =>
    selectedCategory === 'Todos os Projetos' ? true : project.category === selectedCategory
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box component="div" sx={styles.mainContainer}>
        <Typography sx={{ color: "tan", fontFamily: "Jost", ml: 2.5 }} variant="overline">
          Meus projetos
        </Typography>
        <Box sx={styles.category}>
          {categories.map((cat, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              sx={styles.categoryButton}
              variant={selectedCategory === cat ? "contained" : "outlined"}
              color="primary"
            >
              {cat}
            </Button>
          ))}
        </Box>
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={8} md={4} key={index}>
              <Card sx={!isMobile ? styles.cardContainer : styles.phoneCards}>
                <CardActionArea>
                  {project.images ? (
                    <Carousel showThumbs={false}>
                      {project.images.map((image, idx) => (
                        <div key={idx}>
                          {project.category && (
                            <Button
                              size="small"
                              color="primary"
                              component="a"
                              href={project.links.deploy}
                              target="_blank"
                            >
                              {project.category}
                            </Button>
                          )}
                          <a href={project.links.deploy} target="_blank">
                            <div>
                              <img
                                alt={`Project ${index + 1}`}
                                src={image}
                                style={{ maxHeight: "11rem", objectFit: "contain" }}
                              />
                            </div>
                          </a>
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <Box sx={styles.category}>
                      {project.category && (
                        <Button
                          size="small"
                          color="primary"
                          component="a"
                          href={project.links.deploy}
                          target="_blank"
                        >
                          {project.category}
                        </Button>
                      )}
                    </Box>
                  )}
                  <CardContent sx={styles.contentCard}>
                    <Box sx={styles.descriptionCard}>
                      <Typography variant="h5" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                    </Box>
                    <Box sx={styles.iconContainer}>
                      {project.technologies.map((tech, idx) => (
                        <Icon key={idx} sx={styles.icon}>
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                            alt={tech}
                            style={{ width: "24px", height: "24px" }}
                          />
                        </Icon>
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={styles.buttons}>
                  {project.links.deploy && (
                    <Button
                      size="small"
                      color="primary"
                      component="a"
                      href={project.links.deploy}
                      target="_blank"
                    >
                      Deploy
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      size="small"
                      color="primary"
                      component="a"
                      href={project.links.github}
                      target="_blank"
                    >
                      Repositório Github
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  )
}

export default Projects;
