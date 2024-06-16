import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  UFERSA,
  frontendlogo,
  PHP,
  mysql,
  python,
  Laravel,
  job1,
  job2,
  job3,
  prof1,
  prof2,
  prof3,
  logondop,
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
    text: "Desenvolvimento de soluções em TI baseadas em  software",
    link: "Saiba mais"
  },
  {
    text: "Informatização de processos organizacionais",
    link: "Saiba mais"
  },
  {
    text: "Capacitações para empresas",
    link: "Saiba mais"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: PHP,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Laravel",
    icon: Laravel,
  },
];

const experiences = [
  {
    title: "University Admission",
    company_name: "Federal University of the Potiguar Semi-Arid",
    icon: UFERSA,
    iconBg: "#383E56",
    date: "February 2020 In progress",
    points: [
      "Computing Fundamentals: Programming, algorithms, data structures and computer architecture.",
      "Computer Networks and Distributed Systems: Protocols, security and management of networks and distributed systems.",
      "Database and Information Systems: Modeling, consultation and management of databases and information systems.",
      "Software Development and Software Engineering: Methods, software design and testing, requirements engineering and collaboration.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Courses Gustavo Guanabara",
    icon: frontendlogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "HTML and CSS: Structuring and styling web pages.",
      "Responsibility and Layouts: Adaptation to different devices and layout techniques.",
      "JavaScript: Introduction to the language for interactivity and dynamism on pages.",
      "Frameworks and Libraries: Use of React.js, Vue.js and jQuery for frontend development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "During that year, I embarked on personal projects and honed my skills in web development.",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "At university, I developed solid skills in web development with React.js, collaboration in cross-functional teams, and quality through responsive design and code reviews.",
    ],
  },
  {
    title: "Ndop",
    company_name: "Núcleo de Desenvolvimento e Otimização de Processos - Process Development and Optimization Core",
    icon: logondop,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "As a student at a technology university, I recently joined the NDOP project and also work as a Fullstack developer at a junior company.",
      "I actively participate in the NDOP project, where I am gaining comprehensive knowledge and practical experience in building complete web applications, covering both front-end and back-end aspects. I have delved into essential front-end technologies like HTML, CSS, JavaScript, and React, enabling me to create visually appealing and highly responsive interfaces that engage users.",
      "Through the use of Node.js, Django, and PHP, I have acquired the necessary skills to build robust back-end systems, including powerful business logic and reliable APIs that facilitate seamless interactions between the application and the database.",
    ],
  },
  {
    title: "Altotech",
    company_name: "Junior company established within the university.",
    icon: logoaltotech,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Working alongside other skilled developers at the junior company Altotech, I actively engage in collaborative efforts, enhancing my communication skills and promoting effective teamwork to ensure the success of our projects.",
      "The opportunity to work on real-world projects has provided me with invaluable hands-on experience in Fullstack development.",
      "I face genuine challenges that allow me to refine my skills and grow as a developer.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Wallacy was a proactive, curious, and committed student. He knows how to work in a team and stands out for his knowledge in programming logic.",
    name: "ccibeli",
    designation: "Professor",
    company: "Federal University of the Semi-Arid Potiguar",
    image: prof1,
  },
  {
    testimonial:
      "Wallacy is a student who values proactivity, teamwork, and professional best practices! His dedication is remarkable, as well as his effort to always excel in what he does! He has my recommendation, without a doubt",
    name: "omatheusllopes",
    designation: "Professor",
    company: "Federal University of the Semi-Arid Potiguar",
    image: prof3,
  },
  {
    testimonial:
      "Wallacy has leadership qualities and, additionally, diligently and meticulously carries out the technical tasks presented to him.",
    name: "walberjas",
    designation: "Professor",
    company: "Federal University of the Semi-Arid Potiguar",
    image: prof2,
  },
];

const projects = [
  {
    name: "Website ECOP",
    description:
      "Teach is the project lead and main developer. This is a website to promote the Ecop (Encontro de Computação do Oeste Potiguar), created using CSS, HTML, and Javascript. It's a responsive page, consistent in design, incorporating libraries like swiper.js and AOS.js for carousel creation and entry animations. Access it at https://ecopufersa.com.br/ or by clicking the icon above.",
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
      "Teach is the project lead and main developer. This is a website to promote the Seminário Internacional de Tecnologia e Ensino (SEMITE), created using CSS, HTML, and Javascript. It's a responsive page, consistent in design, incorporating libraries like swiper.js and AOS.js for carousel creation and entry animations. Access it at https://semite.uern.org/ or by clicking the icon above.",
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

export { services, technologies, experiences, testimonials, projects };
