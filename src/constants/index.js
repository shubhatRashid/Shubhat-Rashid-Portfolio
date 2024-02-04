import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    ecommer,
    todolist,
    portfolio,
    weatherapp,
    threejs,
    github,
    linkedin,
    leetcode
  } from "../assets";
  
  const socials = [
    {
      title:'Github',
      icon: github,
      url:'https://github.com/shubhatRashid/'
    },
    {
      title:'LinkedIn',
      icon: linkedin,
      url:'https://www.linkedin.com/in/shubhat-rashid-b52b40276/'
    },
    {
      title:'leetcode',
      icon : leetcode,
      url:'https://leetcode.com/rashidshubhat41'
    }
  ]
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN developer",
      icon: creator,
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
      name: "Node JS",
      icon: nodejs,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "StarDucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Dummy Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Dummy Company",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Dummy company",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but shubhat proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Shubhat does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommer",
      description:
        "The Ecommerce WebApp is a full-stack application that allows users to browse,and purchase products online. It utilizes Strapi as the backend CMS for managing products and orders, React for the frontend user interface, PostgreSQL as the database, and Stripe for secure payment processing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "strapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommer,
      source_code_link: "https://github.com/shubhatRashid/Ecommer",
    },
    {
      name: "Todo List",
      description:
        "This is a simple ToDo List web application built using HTML, CSS, JavaScript, Node.js, Express, EJS templating, and MongoDB. The app allows users to create, read, update, and delete tasks on their ToDo list.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/shubhatRashid/Todo_list",
    },
    {
      name: "This Portfolio",
      description:
        "This is a portfolio web application built using HTML, CSS, JavaScript, and the React framework. The application showcases my personal projects and skills in an interactive and visually appealing manner. It incorporates various libraries and technologies such as email.js, react-threejs/drei, react-threejs/fibre, framer-motion, and Tailwind CSS to enhance the user experience.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "fremerMotion",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/shubhatRashid/Shubhat-Rashid-Portfolio",
    },
    {
      name: "Weather App",
      description:
        "A simple Current Weather web application built using HTML, CSS, JavaScript, React, Bootstrap React, Material-UI, Git, and GitHub for version control and deployment.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/shubhatRashid/WeatherApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,socials };