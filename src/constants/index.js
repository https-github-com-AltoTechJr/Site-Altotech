import {
  job1,
  job2,
  job3,
  logoaltotech,
} from "../assets";

export const navLinks = [
  {
    id: "Servicos",
    title: "Serviços",
  },
  {
    id: "Depoimentos",
    title: "Depoimentos",
  },
  {
    id: "Projetos",
    title: "Projetos",
  },
  {
    id: "Contato",
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
      "Apesar de sua recente entrada no mercado, a AltoTech está se destacando. A empresa é responsável pelo desenvolvimento e manutenção do site do ECOP, o que evidencia sua competência e inovação.",
    empresa: "ecop.ufersa",
    name: "Francisco Carlos Gurgel da Silva Segundo",
    designation: "Docente Coordenador",
    company: "Ecop",
    image: logoaltotech,
  },
  {
    testimonial:
      "A parceria com a Altotech foi crucial para a ACVL, permitindo criar um site oficial que apresenta nossa história, ações e prestação de contas, essencial para participação em editais de fomento.",
      empresa: "voluntariosdaleitura",
      name: "Rafaella Pereira Chagas",
      designation: "Secretária na Diretoria e Coordenadora pedagógica",
      company: "ACVL",
      image: logoaltotech,
  },
  {
    testimonial:
      "Minha experiência com a AltoTech foi satisfatória no desenvolvimento do site do seminário internacional de ensino, garantindo divulgações, inscrições, e atualizações em tempo real.",
      empresa: "Semite",
      name: "Glaydson Oliveria",
      designation: "Docente Coordenador",
      company: "Semite",
      image:logoaltotech,
  },
];

const projects = [
  {
    name: "Website ECOP",
    description:
      "",
    tags: [
    
    ],
    image: job1,
    source_code_link: "https://ecopufersa.com.br/",
  },
  {
    name: "Voluntarios da Leitura",
    description:
      "",
    tags: [
    ],
    image: job2,
    source_code_link: "",
  },
  {
    name: "Website Semite",
    description:
      "",
    tags: [
      
    ],
    image: job3,
    source_code_link: "",
  },
];

export {services, testimonials, projects};
