import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    redux,
    summiz,
    tailwindcss,
    threads,
    java,
    mysql,
    college,
    school
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const educations = [
    {
        title: "Bachelor of Engineering",
        institution_name: "Sri Shakthi Institute of Engineering and Technology",
        icon: college,
        iconBg: "#accbe1",
        date: "Oct 2021 - Present",
        points: [
            "Working on various academic projects involving frontend development, database management, and data structures.",
            "Actively participating in technical workshops and coding competitions",
            "Maintaining a strong academic record with a CGPA of 8.43.",
        ],
    },
    {
        title: "Higher Secondary Education - 12th Grade",
        institution_name: "CRR Matric Higher Secondary School",
        icon: school,
        iconBg: "#fbc3bc",
        date: "June 2020 - July 2021",
        points: [
            "Specialized in Mathematics, Physics and Chemistry",
            "Achieved 93.88% in the 12th grade final exams.",
            "Developed a strong foundation in problem-solving and analytical thinking through various school projects and assignments.",
            "Participated in school-level science exhibitions.",
        ],
    },
    {
        title: "Secondary Education - 10th Grade",
        institution_name: "CRR Matric Higher Secondary School",
        icon: school,
        iconBg: "#b7e4c7",
        date: "June 2018 - May 2019",
        points: [
            "Completed foundational studies in all core subjects including Mathematics, Science, and Social Studies.",
            "Achieved 94.2% in the 10th grade final exams.",
            "Participated in school-level extracurricular activities, including debates and quizzes.",
        ],
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SarikaRamamoorthy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sarika-ramamoorthy',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'TCP Chat Room',
        description: 'Created a chat room using Java with TCP as the communication protocol, implemented using the Socket Class in Java.',
        link: 'https://github.com/SarikaRamamoorthy/TCP-Chat-Room',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'MERN Estate',
        description: 'Developed a rental platform for tenants and owners to post and rent available properties, utilizing ReactJS and Tailwind CSS for the frontend, MongoDB for the database, and ExpressJS for the backend.',
        link: 'https://github.com/SarikaRamamoorthy/MERN-estate',
        live: 'https://rentify-estate.onrender.com/'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Express Ride',
        description: 'Developed a monolith console-based vehicle rental system using Java and MySQL DB, considering various use cases from the admin and borrower point of view.',
        link: 'https://github.com/SarikaRamamoorthy/Express-Ride',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'FlavorHaven',
        description: 'Developed a console-based restaurant application using MVC architecture, with Java handling the business logic and MySQL for data storage.',
        link: 'https://github.com/SarikaRamamoorthy/FlavorHaven',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Smart Gloves for the Mute',
        description: 'Filed a patent for smart gloves designed to help mute individuals communicate through hand motions, tracked by Arduino and converted into pre-recorded voice messages.',
        link: 'https://github.com/SarikaRamamoorthy/SmartGloves',
        applicationNo : '202441037439',
    }
];