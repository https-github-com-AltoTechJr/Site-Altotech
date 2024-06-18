import {
  job1,
  job2,
  job3,
  logoaltotech,
} from "../assets";

export const navLinks = [
  {
    id: "servicos",
    title: "Serviços",
  },
  {
    id: "depoimentos",
    title: "Depoimentos",
  },
  {
    id: "projetos",
    title: "Projetos",
  },
  {
    id: "contato",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvimento de soluções em TI baseadas em software",
    Subtitle: "Desenvolvimento de solução",
    texto: "Em Desenvolvimento 1",
  },
  {
    title: "Informatização de processos organizacionais",
    Subtitle: "Desenvolvimento de solução 2",
    texto: "Em Desenvolvimento 2",
  },
  {
    title: "Capacitações para empresas",
    Subtitle: "Desenvolvimento de solução 3",
    texto: "Em Desenvolvimento 3",

  },
  {
    title: "Soluções de Infraestrutura em Nuvem com AWS",
    Subtitle: "Desenvolvimento de solução 4",
    texto: "Em Desenvolvimento 4",
  },
];


const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt blanditiis nobis laboriosam voluptatum quae eius assumenda mollitia consectetur quidem neque quisquam molestiae",
    name: "Nome",
    designation: "Profissão",
    company: "Onde Trabalha",
    image: logoaltotech,
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt blanditiis nobis laboriosam voluptatum quae eius assumenda mollitia consectetur quidem neque quisquam molestiae",
      name: "Nome",
      designation: "Profissão",
      company: "Onde Trabalha",
      image: logoaltotech,
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt blanditiis nobis laboriosam voluptatum quae eius assumenda mollitia consectetur quidem neque quisquam molestiae",
      name: "Nome",
      designation: "Profissão",
      company: "Onde Trabalha",
      image:logoaltotech,
  },
];

const projects = [
  {
    name: "Website ECOP",
    description:
      "Este é um site de divulgação do Ecop (Encontro de Computação do Oeste Potiguar), criado em CSS, HTML e Javascript. É uma página responsiva, com design consistente, incorporando bibliotecas como swiper.js e AOS.js para criação de carrossel e animações de entrada. Acesse em https://ecopufersa.com.br/ ou clicando no ícone acima.",
    tags: [
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "yellow-text-gradient",
      },
    ],
    image: job1,
    source_code_link: "https://ecopufersa.com.br/",
  },
  {
    name: "Monitoring system",
    description:
      "As a lead developer and project manager of NDOP - Nucleus for Development and Process Optimization, I have been involved in every stage of the process, both in the backend and frontend. I led a multidisciplinary team, applying my skills in PHP, MySQL, HTML, CSS, React.js, Node.js, and JavaScript to develop an innovative disease monitoring website, providing accurate information for healthcare professionals to make strategic decisions and combat epidemics, resulting in a positive impact on society and significant professional growth.",
    tags: [
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "yellow-text-gradient",
      },
      {
        name: "PHP7",
        color: "violet-text-gradient",
      },
      {
        name: "NODE.JS",
        color: "green-text-gradient",
      },
      {
        name: "REACT",
        color: "whiteblue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "blueorange-text-gradient",
      },
    ],
    image: job2,
    source_code_link: "https://github.com/WallacyFernandez",
  },
  {
    name: "Website Semite",
    description:
      "Este é um site de divulgação do Seminário Internacional de Tecnologia e Ensino (SEMITE), criado em CSS, HTML e Javascript. É uma página responsiva, com design consistente, incorporando bibliotecas como swiper.js e AOS.js para criação de carrossel e animações de entrada. Acesse em https://semite.uern.org/ ou clicando no ícone acima.",
    tags: [
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "yellow-text-gradient",
      },
    ],
    image: job3,
    source_code_link: "https://semite.uern.org/",
  },
];

export { services, testimonials, projects };
