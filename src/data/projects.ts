import News from '../assets/images/news.png';
import NewsPhome from '../assets/images/termo-phone.png';
import Recip from '../assets/images/recipe.png';
import Recipe from '../assets/images/recipes-phone.png';
import Reci from '../assets/images/recip-phone.png';
import Cyos from '../assets/images/cyo.png';
import CyoPhone from '../assets/images/cyo-phone.png';
import Swars from '../assets/images/swars.png';
import Pixel from '../assets/images/pixel-art.png';
import PixelPhone from '../assets/images/pixel-phone.png';
import pid0 from '../assets/images/pid0.jpeg';
import pid1 from '../assets/images/pid1.jpeg';
import pid2 from '../assets/images/pid2.jpeg';
import pid3 from '../assets/images/pid3.jpeg';
import lentes from '../assets/images/lentes.png';
import lentePhone from '../assets/images/lente-phone.png';
import tora1 from '../assets/images/tora-1.png';
import tora2 from '../assets/images/tora-2.png';
import tora3 from '../assets/images/tora-3.png';
import toraMobile from '../assets/images/tora-mobile.png';
import ifwb from '../assets/images/ifwb.png';
import ifwbCel from '../assets/images/ifwb-cel.png';
import airbnb from '../assets/images/airbnb.png';
import airbnb2 from '../assets/images/airbnb2.png';
import airbnb3 from '../assets/images/airbnb3.png';
import airbnbPhone from '../assets/images/airbnb-cel.png';

export interface ProjectInterface {
  name: string;
  description: string;
  images?: string[];
  links: {
    github?: string;
    deploy: string;
  };
  category: string;
  technologies: string[];
}

export const projects = [
  {
    name: "Indígena Fashion Week Brasil",
    description: `O site oficial do Indígena Fashion Week Brasil (IFWB) foi desenvolvido com Next.js e TypeScript. 
    Este projeto fullstack oferece uma plataforma completa para promover o evento, com funcionalidades que incluem formulários interativos para inscrição e contato, além de integração de e-mail para comunicação eficiente. 
    O site é otimizado para uma experiência de navegação fluida, destacando a programação do evento, galerias de fotos e vídeos, e proporcionando uma vitrine digital para os estilistas indígenas.`,
    images: [
      ifwb,
      ifwbCel
    ],
    links: {
      deploy: "https://www.ifwb.com.br/",
    },
    category: "fullstack",
    technologies: ["Nextjs", "TypeScript", "JavaScript", "React", "Nodejs", "Tailwindcss", "Framermotion"],
  },
  {
    name: "E-commerce Tora Wood",
    description: `E-commerce fullstack oficial da marca de biojoias, Tora Wood.
    Este site oferece uma experiência de compra completa, desde a navegação intuitiva até o checkout seguro e eficiente. 
    Com recursos avançados como integração de pagamento via Pix e cartões de crédito, e-mails automáticos de confirmação e atualizações de pedido, além de autenticação JWT para garantir a segurança. 
    Utilizando MongoDB como banco de dados, o site também oferece funcionalidades como avaliação de usuários, recomendações personalizadas e muito mais. É a fusão perfeita entre elegância e tecnologia, trazendo a beleza das biojoias da Tora Wood para o mundo online.`,
    images: [
      tora1,
      toraMobile,
      tora2,
      tora3,
    ],
    links: {
      deploy: "https://torawood.vercel.app/",
    },
    category: "fullstack",
    technologies: ["TypeScript", "JavaScript", "React", "MongoDB", "Nodejs", "Express", "Tailwindcss", "Framermotion", "googleCloud"],
  },
  {
    name: "Airbnb Clone",
    description: `Este projeto é um clone da página inicial do Airbnb, desenvolvido para interagir com minha API de reservas de hotel, 
    HotelReservationSystem, que foi construída com ASP.NET. Embora o projeto seja um clone, ele demonstra a integração eficiente com a API para exibir dados em tempo real.`,
    images: [
      airbnb,
      airbnbPhone,
      airbnb2,
      airbnb3,
    ],
    links: {
      deploy: "https://hotelairbnb.vercel.app/",
      github: "https://github.com/vCiolac/hotelReservation-airbnbClone",
    },
    category: "front-end",
    technologies: ["TypeScript", "JavaScript", "React", "Tailwindcss"],
  },
  {
    name: "Lentes e Fotografia",
    description: `Este projeto é uma plataforma online onde fotógrafos podem exibir seu trabalho de forma profissional. 
      Os usuários podem navegar por diferentes álbuns, favoritar e avaliar as imagens. 
      Além disso, uma funcionalidade especial foi implementada para extrair os metadados das imagens, incluindo informações como data e hora em que foram tiradas, utilizando o EXIF das imagens. 
      Os administradores têm acesso a um painel para fazer upload de novas fotos e gerenciar o conteúdo. 
      Desenvolvido em React, o projeto utiliza o Firebase Cloud para armazenar as imagens e dados na nuvem.`,
    images: [
      lentes,
      lentePhone,
    ],
    links: {
      github: "https://github.com/vCiolac/lentes-e-fotografia",
      deploy: "https://lentesfotografia.vercel.app/",
    },
    category: "fullstack",
    technologies: ["TypeScript", "React", "Firebase", "Tailwindcss"],
  },
  {
    name: "Pigeon Adventure",
    description: `Em "Pigeon Adventure", os jogadores embarcam em uma emocionante jornada através de diversos mundos, assumindo o controle de um destemido pombo. 
    Neste jogo dinâmico desenvolvido tanto para desktop quanto para dispositivos móveis, seu objetivo é simples, mas desafiador: coletar o maior número de moedas possível enquanto desvia de obstáculos e evita inimigos habilmente posicionados ao longo do caminho. 
    Com controles intuitivos e uma jogabilidade envolvente, prepare-se para enfrentar uma variedade de plataformas móveis e desafiadoras, enquanto voa pelos céus, florestas e cavernas!
    Desenvolvido com a poderosa engine Godot 4, "Pigeon Adventure" oferece uma experiência de jogo imersiva e divertida para jogadores de todas as idades.`,
    images: [
      pid0,
      pid1,
      pid2,
      pid3,
    ],
    links: {
      github: "https://github.com/vCiolac/first-godot-game",
      deploy: "https://pigeon-adventure.vercel.app/",
    },
    category: "game",
    technologies: ["Godot", "Android"],
  },
  {
    name: "Choose Your Own - Aventura em Texto",
    description: `Meu primeiro projeto de jogo, ele se baseia em uma aventura por texto desenvolvido exclusivamente em JavaScript.
      O jogo oferece aos jogadores a oportunidade de tomar decisões que influenciam diretamente o rumo da história. 
      Cada escolha leva a diferentes desfechos, junto de novas imagens e sons tornando a experiência altamente interativa!`,
    images: [
      Cyos,
      CyoPhone,
    ],
    links: {
      github: "https://github.com/vCiolac/cyo",
      deploy: "https://cyo.vercel.app/",
    },
    category: "front-end",
    technologies: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    name: "App de Receitas",
    description: `Neste projeto, desenvolvido com React e Context API, a pessoa que estiver utilizando o app pode criar um login e então ter acesso a uma
     variedade de receitas com base em diferentes critérios, é possível favoritar, acompanhar, salvar e compartilhar receitas,
     entre outras funcionalidades.`,
    images: [
      Recip,
      Reci,
      Recipe,
    ],
    links: {
      github: "https://github.com/vCiolac/recipes-app",
      deploy: "https://recipes-app-vciolac.vercel.app/",
    },
    category: "front-end",
    technologies: ["TypeScript", "React", "Redux", "Bootstrap", "Framermotion"],
  },
  {
    name: "Termo News",
    description: `Este é um projeto React que permite aos usuários acessarem notícias mais recentes do 
    Instituto Brasileiro de Geografia e Estatística (IBGE). Os usuários podem ler as notícias completas, 
    favoritar as notícias de seu interesse, filtrar as notícias por título e tipo. 
    E também ver a informação de sua data e há quantos dias atrás cada notícia foi publicada.`,
    images: [
      News,
      NewsPhome,
    ],
    links: {
      github: "https://github.com/vCiolac/journalNews",
      deploy: "https://termo-news.vercel.app/",
    },
    category: "front-end",
    technologies: ["TypeScript", "React", "MaterialUI"],
  },
  {
    name: "Project Star Wars",
    description: `Este projeto em React busca em uma API externa uma lista de planetas do universo Star Wars. 
    A aplicação inclui filtros para facilitar a busca e utiliza Redux e Hooks para gerenciar os estados globais.`,
    images: [
      Swars,
    ],
    links: {
      github: "https://github.com/vCiolac/trybe-starwars",
    },
    category: "front-end",
    technologies: ["React", "Redux"],
  },
  {
    name: "Project Pixel Art",
    description: `Meu primeiro projeto em JavaScript, é uma representação simples, 
    minimalista e divertida, oferecendo uma plataforma para pintar imagens com pixels.`,
    images: [
      Pixel,
      PixelPhone,
    ],
    links: {
      github: "https://github.com/vCiolac/pixel_art",
      deploy: "https://proj-pixel-art.vercel.app/",
    },
    category: "front-end",
    technologies: ["HTML5", "JavaScript", "CSS3"],
  },
  {
    name: "HotelReservationSystem",
    description: `HotelReservationSystem é um sistema de reserva de quartos de hotel desenvolvido em C# com ASP.NET.`,
    category: "back-end",
    technologies: ["Csharp", "dotnetcore", "mysql"],
    links: {
      github: "https://github.com/vCiolac/HotelReservationSystem",
      deploy: "https://hrs.up.railway.app",
    },
  },
  {
    name: "Medieval Store",
    description: `API robusta e segura para uma loja de itens medievais, construída com Typescript e Sequelize.`,
    category: "back-end",
    technologies: ["TypeScript", "Sequelize", "mocha", "nodejs", "express"],
    links: {
      github: "https://github.com/vCiolac/Medieval-Store",
    },
  },
  {
    name: "Store Manager",
    description: `API RESTful utilizando JavaScript e Sequelize para interagir com um banco de dados MySQL, gerenciamento de vendas e produtos.`,
    category: "back-end",
    technologies: ["JavaScript", "Sequelize", "MySQL"],
    links: {
      github: "https://github.com/vCiolac/StoreManager",
    },
  },
  {
    name: "blog API",
    description: `Projeto de API de Blogs desenvolvido em Node.js utilizando Sequelize para o gerenciamento de conteúdo e autenticação de usuários, com suporte a categorias e endpoints RESTful.`,
    category: "back-end",
    technologies: ["JavaScript", "Nodejs", "Sequelize", "Docker", "mysql", "express"],
    links: {
      github: "https://github.com/vCiolac/blogAPI",
    },
  },
  {
    name: "Talk Manager",
    description: `Aplicação de gerenciamento de palestrantes com funcionalidades de CRUD, autenticação e pesquisa, utilizando Node.js e Express.`,
    category: "back-end",
    technologies: ["JavaScript", "Nodejs", "Express"],
    links: {
      github: "https://github.com/vCiolac/TalkManager",
    },
  },
  {
    name: "Trybers and Dragons",
    description: `Este projeto utiliza os princípios de SOLID e POO para a criação de um RPG de interpretação de papéis, trazendo diversidade de raças, arquétipos e batalhas épicas.`,
    category: "back-end",
    technologies: ["TypeScript", "nodejs", "express"],
    links: {
      github: "https://github.com/vCiolac/Trybers-Dragons",
    },
  },
  {
    name: "tWallet",
    description: `Este projeto consiste em uma aplicação de carteira de controle de gastos, com a funcionalidade adicional de um conversor de moedas.`,
    category: "front-end",
    technologies: ["JavaScript", "TypeScript", "React", "Redux"],
    links: {
      github: "https://github.com/vCiolac/trybe-wallet",
    },
  },
  {
    name: "Data Forge",
    description: `DataForge é um projeto que combina normalização, análise e consultas SQL para manipulação avançada de dados. O objetivo principal é praticar e demonstrar habilidades em modelagem de dados, normalização de tabelas, e consultas SQL complexas.`,
    category: "back-end",
    technologies: ["JavaScript", "Docker"],
    links: {
      github: "https://github.com/vCiolac/DataForge",
    },
  },
  {
    name: "Job Insights",
    description: `Projeto de análise de dados sobre empregos em Python, utilizando técnicas de manipulação de arquivos, estruturas condicionais, funções built-in, tratamento de exceções, escrita de funções, testes com Pytest e criação de módulos personalizados.`,
    category: "data-science",
    technologies: ["Python", "Pytest"],
    links: {
      github: "https://github.com/vCiolac/jobInsights",
    },
  },
  {
    name: "Project Algorithms",
    description: `Projeto em Python focado em resolver problemas e otimizar algoritmos, desenvolvendo habilidades de lógica de programação e interpretação de problemas.`,
    category: "data-science",
    technologies: ["Python", "Pytest"],
    links: {
      github: "https://github.com/vCiolac/projectAlgorithms",
    },
  },
  {
    name: "TING",
    description: `Programa em Python que simula um algoritmo de indexação de documentos, permitindo a busca de termos em arquivos TXT.`,
    category: "data-science",
    technologies: ["Python", "Pytest"],
    links: {
      github: "https://github.com/vCiolac/ting",
    },
  },
  {
    name: "Restaurant Orders",
    description: `Ferramenta de construção de cardápios, desenvolvido em Python, com foco em facilitar a gestão de receitas e estoque.`,
    category: "data-science",
    technologies: ["Python", "Pytest"],
    links: {
      github: "https://github.com/vCiolac/RestaurantOrders",
    },
  },
];