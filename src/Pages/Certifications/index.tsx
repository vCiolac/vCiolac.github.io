import React, { Fragment, useContext } from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { codeString } from './codeString';
import { LayoutContext } from '../../context/LayoutContext';
import { LoaderContext } from '../../context/LoaderContext';
import { Typography, Container, Box, Button, Card, CardActions, CardContent } from '@mui/material';
import js_img from '../../assets/images/js.png';
import fund from '../../assets/images/fund.png';
import front from '../../assets/images/front.png';
import back from '../../assets/images/back.png';
import iaAws from '../../assets/images/ia-aws.png';
import csharp from '../../assets/images/csharp.png';
import fullstack from '../../assets/images/fullstack.png';

function Certifications() {
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

  const certifications = [
      {
      title: "Formaçao em Desenvolvimento Full-Stack",
      summary: "Esse é o certificado de conclusão no meu curso da Trybe, com carga horária de 1.500 horas/aula. Durante esse período, aprofundei-me e apliquei de forma prática conteúdos de: Fundamentos do Desenvolvimento Web, Front-End e Back-End em Javascript; Ciência da Computação em Python; Habilidades de Soft-skills; Metodologias Ágeis e complementou sua formação com uma Certificação Eletiva em C#.",
      link: "https://www.credential.net/a8444808-309d-48e5-9d51-1d1b9c9e81b9",
      image: fullstack
    },
    {
      title: "Certificação Eletiva em C#",
      summary: "Durante este período, em uma carga horária de 170 horas/aula, aprofundei-me e apliquei de forma prática conteúdos como: .NET Core, Criação de APIs com ASP.NET, Testes Unitários com xUnit, Banco de Dados com SQL Server, Entity Framework, Autenticação e Autorização, Collections & LINQ, Docker, Arquitetura de Microsserviços e Deployment com Azure. Além disso, concluí 100 horas/aula de conteúdos revisionais de Carreira, incluindo revisões de Front-end e Back-end e um desafio full stack.",
      link: "https://www.credential.net/36caf0d5-3cbd-4bf5-899d-792000bc8aeb",
      image: csharp
    },
    {
      title: "Módulo de Front-end",
      summary: "Durante este período, me aprofundei e apliquei de forma prática diversas competências-chave, incluindo: JavaScript, TypeScript, Testes Automatizados, React (com ênfase em Componentes de classe e funcionais. estados, eventos e estilização de componentes), React Router, Redux, Context API & Hooks, bem como Metodologias Ágeis.",
      link: "https://www.credential.net/b026619a-4347-4fc8-8cb5-0d3235448193",
      image: front
    },
    {
      title: "Módulo de Back-end",
      summary: "Durante este período, me aprofundei e apliquei de forma prática em conteúdos como: Docker, MySQL, Node.js & Express, Testes Unitários e de Integração com Mocha, Chai e Sinon, TypeScript, Arquitetura em Camadas, REST, JWT, ORM com Sequelize, Deployment, POO e princípios SOLID, Arquitetura de Software, Banco de Dados, Autenticação, Autorização, Testes de Integração, DDD, Clean Architecture, Upload, CI/CD.",
      link: "https://www.credential.net/89fd00be-a1b6-463d-a29a-3816bdf88bed",
      image: back
    },
    {
      title: "Módulo de Fundamentos do Desenvolvimento Web",
      summary: "Esse certificado é sobre o primeiro módulo da Trybe, que aborda conteúdos relacionados a Fundamentos do Desenvolvimento Web, aplicando de forma prática conteúdos como: Unix & Bash, Git, JS Básico & DOM, HTML, CSS, JS ES6, Higher Order Functions e Testes Unitários, assim como metodologias ágeis e habilidades comportamentais.",
      link: "https://www.credential.net/50fe063f-db3c-4d29-9a89-a36a7964d132",
      image: fund
    },
    {
      title: "Simplificando a IA Generativa - Colaboração AWS + Trybe",
      summary: "Seminário sobre os princípos da Inteligência Artificial Generativa.",
      link: "https://content.betrybe.com/assets/4478e835-91fd-4f1a-baa9-d68f80f85756?access_token=mHmd0EskDWOTi6IduXlAiXA377B4mErw",
      image: iaAws
    },
    {
      title: "Curso Javascript do Zero",
      summary: "Esse certificado é sobre o curso de Javascript do Zero, que aborda conteúdos relacionados a Javascript, aplicando de forma prática conteúdos como: JS Básico & DOM, JS ES6, Higher Order Functions e Testes Unitários.",
      link: "https://content.betrybe.com/assets/d1772ce7-f14b-4326-9a4b-5b65e6a965f3?access_token=mHmd0EskDWOTi6IduXlAiXA377B4mErw",
      image: js_img
    },
  ];

  return (
    <Fragment>
      <Container maxWidth='lg' sx={{ marginTop: 4, marginLeft: 2 }}>
        <Typography variant="overline" sx={{ color: "tan", fontFamily: "Jost" }}>
          Minhas certificações
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: 3 }}>
          {certifications.map((certification, index) => (
            <Card key={index} sx={{ maxWidth: 300 }}>
              <img src={certification.image} alt={certification.title} style={{ maxWidth: '100%', height: 'auto' }} />
              <CardContent>
                <Typography variant="body1" sx={{ color: "tan", fontFamily: "Jost" }}>
                  {certification.title}
                </Typography>
                <Typography variant="body2">
                  {certification.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={certification.link} target="_blank" rel="noopener noreferrer">
                  Ver certificado
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Fragment>
  );
}

export default Certifications;
