import React, { Fragment, useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Typography, Grid, Box, Container } from '@mui/material';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';

function Skills() {
  const { showCodeContent } = useContext(LayoutContext);
  const { isLoading } = useContext(LoaderContext);

  if (isLoading) return null;

  if (!showCodeContent) {
    return (
      <Fragment>
        <CodeEditor codeString={codeString} />
      </Fragment>
    );
  }
  
  const skills = [
    { 
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    { 
      name: "HTML",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    { 
      name: "CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    { 
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    },
    { 
      name: "Jest",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
    },
    { 
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    { 
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    { 
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    { 
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    { 
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    { 
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    { 
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    { 
      name: "Amazon Web Services",
      icon: "https://www.svgrepo.com/show/448266/aws.svg",
    },
    { 
      name: "SQLite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
    { 
      name: "Godot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
    },
    { 
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    { 
      name: "Tailwind CSS",
      icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    { 
      name: "ESLint",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    },
    { 
      name: "Material-UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    { 
      name: "Markdown",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
    },
    { 
      name: "Mocha",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
    },
    { 
      name: "npm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    { 
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    { 
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    { 
      name: "Slack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    },
    { 
      name: "Trello",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    },
    { 
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    { 
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    },
    // Adicione mais habilidades conforme necessário
  ];

  return (
    <Fragment>
      <Container maxWidth='lg' sx={{ marginTop: 4 }}>
      <Typography variant="overline" sx={{ color: "tan", fontFamily: "Jost"}}>
            Minhas habilidades e stacks
          </Typography>
        <Box sx={{ width: "85vw", zIndex: 1, marginLeft: 2, marginTop: 2 }}>
          <Grid container spacing={2} >
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <Typography variant="body1" sx={{  fontFamily: "Jost" }}>
                  {skill.name}
                </Typography>
                <img src={`${skill.icon}`} alt={skill.name} width={50} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Skills;
