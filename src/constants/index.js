export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
    {
      id: 5,
      name: 'View Site on GitHub',
      href: 'https://github.com/trietngo/portfolio-3JS',
    },
];
  
export const clientReviews = [
    {
      id: 1,
      name: 'Dylan H.',
      position: 'Best Friend from College',
      img: 'assets/review1.png',
      review:
        "He's pretty cool, I guess.",
    },
    {
      id: 2,
      name: 'Zadie M.',
      position: 'Another Great Friend from College',
      img: 'assets/review2.png',
      review:
        'Slayyy',
    },
    {
      id: 3,
      name: 'Jessica P.',
      position: 'Very Important Person',
      img: 'assets/review3.png',
      review:
        'Amazing!',
    },
    {
      id: 4,
      name: 'Kei N.',
      position: 'Mentor',
      img: 'assets/review4.png',
      review:
        'Great photographer!',
    },
];
  
export const myProjects = [
    {
      title: 'This Site!',
      desc: 'This is my portfolio site, made with Three.js and React.',
      subdesc:
        'Utilized React Three Fiber (R3F) components and Drei helpers. Styled using Tailwind CSS for UI, Leva for in-browser 3D viewer and controller, and GSAP for asset animations. Converted 3D objects sourced from Sketchfab to R3F components and added appropriate artist attributions.',
      href: 'https://github.com/trietngo/portfolio-3JS',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'GSAP',
          path: '/assets/threejs.png',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 5,
          name: 'GSAP',
          path: '/assets/gsap.jpg',
        },
        
      ],
    },
    {
      title: 'Rently: Rent Price Prediction App',
      desc: 'React web app that allows users to calculate property rent prices based on point-and-click geographic coordinates, property sizes, property types, and amenities.',
      subdesc:
        'Used React Leaflet to render an interactive world map with the OpenStreetMap API and styled UI components using Material UI. Implemented reverse-geocoding using the OSM Nominatim API. Attempted rent predictions using a Python-trained TensorFlow model converted to JSON with TensorFlow.js',
      href: 'https://rentlybytriet.netlify.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Leaflet',
          path: 'assets/leaflet.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'Material UI',
          path: '/assets/materialui.png',
        },
        {
          id: 5,
          name: 'TensorFlow',
          path: '/assets/tensorflow.png',
        },
      ],
    },
    {
      title: 'Touchless and Go: A Feasibility Study of Implementing OS-Level Gesture Control',
      desc: 'Literature review regarding existing implementations of gesture recognition and control.',
      subdesc:
        'Based on the study, developed a C++ program that lets users navigate Windows desktop using hand gestures as input with reasonable accuracy. Used OpenCV to train Haar cascade classifiers of gestures used for machine-learning-assisted recognition.',
      href: 'https://github.com/trietngo/CS8764-GestureControl-Cpp',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'CATabase: A Feline Database Management System',
      desc: 'Web application that allows CRUD operations on a MongoDB database with an activity log as a Redis cache.',
      subdesc:
        'Database design adheres to UML standards. Cats, shelters, and users data generated and tested using Mockaroo and MongoDB Compass. Used Express.js and Mongoose to process requests and perform queries in the back-end. Implemented an in-memory activity log using Node-Redis. Used EJS and Bootstrap for front-end development',
      href: 'https://github.com/trietngo/CS5200.Project3.CATabaseMongoRedis',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Project Ariadne: A Self-solving Maze Generator',
      desc: 'Python program that creates solvable mazes of varying sizes up to 5000 cells, each with a shortest-path solution.',
      subdesc:
        'Built using Python with the native Turtle library for visualization.',
      href: 'https://github.com/trietngo/NEU-CS-5001-Self-Solving-Maze',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Meme Marketing: How Viral Marketing Adapts to the Internet Culture',
      desc: 'Conducted marketing research on Internet memes as part of viral online marketing.',
      subdesc:
        'Compiled notable business-related examples on social media, namely then-Twitter and Facebook, and described esoteric references using Know Your Meme. Underwent IRB ethics training and designed an IRB-approved Qualtrics survey of students and staff at the University of Northern Iowa. Analyzed 92 responses using Chi-Squared and ANOVA tests to determine significant indicators influencing the acceptance of meme marketing attempts',
      href: 'https://scholarworks.uni.edu/hpt/484/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
];
  
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
  
export const workExperiences = [
    {
      id: 1,
      name: 'IpserLab',
      pos: 'Software Engineer Intern',
      location: 'Mountain View, CA',
      duration: 'May 2024 - Present',
      title: "Developed an online contract manufacturing marketplace using a proprietary React library with Tailwind CSS and Material UI for front-end rendering, and Spring Boot and PostgreSQL for back-end connectivity and queries.",
      icon: '/assets/ipserlabLogo.jpg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'University of Northern Iowa, Center for Energy & Environmental Education (CEEE)',
      pos: 'Communications and Digital Media Intern',
      location: 'Cedar Falls, IA',
      duration: 'Sep. 2021 - Jul. 2022',
      title: "Developed communication plans for the community-building initiatives with CEEE Director and staff. Created and managed content for Cedar Valley Regional Food & Farm Network on Facebook and Instagram.",
      icon: '/assets/uniLogo.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Community Foundation of Northeast Iowa',
      pos: 'Marketing and Communications Intern',
      location: 'Cedar Falls, IA',
      duration: 'Jun. 2020 – Apr. 2021',
      title: "Designed promotional materials for the organization’s Facebook and LinkedIn pages. Edited promotional videos for social media and the organization’s website. Animated an infographic video using Adobe After Effects to promote the Donor Advised Fund.",
      icon: '/assets/uniLogo.png',
      animation: 'salute',
    },
    {
      id: 4,
      name: 'University of Northern Iowa, Northern Iowa Student Government (NISG)',
      pos: 'Junior Web Developer',
      location: 'Cedar Falls, IA',
      duration: 'May 2020 – Apr. 2021',
      title: "Managed and maintained NISG social media presence through Facebook, Instagram, and Twitter. Collaborated with other NISG members and student leaders to promote campus-wide events and initiatives. Designed promotional materials for use on the NISG website and social media.",
      icon: '/assets/uniLogo.png',
      animation: 'salute',
    },
    {
      id: 5,
      name: 'University of Northern Iowa, College of Business Administration',
      pos: 'Video Assistant',
      location: 'Cedar Falls, IA',
      duration: 'Oct. 2018 – Apr. 2020',
      title: "Collaborated with student leaders to promote the College through event videography and interviews. Filmed and edited a tribute video showcasing the Transamerica Business Intelligence & Analytics Lab in collaboration with faculty and staff members. Filmed stock footage for use in other promotional efforts.",
      icon: '/assets/uniLogo.png',
      animation: 'salute',
    },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: "false" },
  { label: "About", link: "/about", icon: "about", newTab: "false" },
  { label: "Projects", link: "/projects", icon: "projects", newTab: "false" },
  { label: "Work Experiences", link: "/experiences", icon: "experiences", newTab: "false" },
  { label: "Contact", link: "/contact", icon: "contact", newTab: "false" },

  {
    label: "Github",
    link: "https://github.com/trietngo",
    icon: "github",
    newTab: true,
  },

  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/triet-ngo/",
    icon: "linkedin",
    newTab: true,
  },

]