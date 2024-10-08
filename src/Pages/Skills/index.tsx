import React, { Fragment, useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Typography, Grid, Box, Container, Button } from '@mui/material';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "SQLite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "SQL Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "RabbitMQ",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    },
    {
      name: "Godot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
    },
    {
      name: "ASP.NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    },
    {
      name: "Amazon Web Services",
      icon: "https://www.svgrepo.com/show/448266/aws.svg",
    },
    {
      name: "Jest",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
    },
    {
      name: "Pytest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Mongoose",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Material-UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "ESLint",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
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
      name: "Framer Motion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    },
    {
      name: "React Router",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    },
    {
      name: "Sequelize",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
    },
    {
      name: "Nodemon",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
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
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Box component="div" sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ color: "tan", fontFamily: "Jost" }}>
            Minhas habilidades e stacks
          </Typography>

            <Box sx={{ mt: 4, mb: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="overline" sx={{ fontFamily: "Jost", color: "white" }}>
              Além de minhas habilidades técnicas listadas abaixo, explore minhas certificações que validam essas habilidades em desenvolvimento web e reforçam minha experiência prática.
            </Typography>
            <Button
              component={Link}
              to="/certifications"
              variant="contained"
              size="small"
              sx={{ mt: 2, backgroundColor: 'tomato', '&:hover': { backgroundColor: 'darkred' } }}
            >
              Ver Certificações
            </Button>
          </Box>

          <Grid container spacing={1} sx={{ mt: 2 }}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontFamily: "Jost", textAlign: 'center' }}>
                  {skill.name}
                </Typography>
                <img src={`${skill.icon}`} alt={skill.name} width={40} style={{ marginBottom: 10, marginTop: 1 }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Skills;
