import {
    mobile,
    backend,
    creator,
    web3,
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
    bacd,
    postnord,
    kbhkommune,
    hvidovrehospital,
    carrent,
    jobit,
    tripguide,
    threejs,
    cbs,
} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Web3 Developer",
        icon: web3,
    },
    {
        title: "Typescript Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [{
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Web Administrator",
        company_name: "Copenhagen Business School",
        icon: cbs,
        iconBg: "white",
        date: "1999 - 2001",
        points: [
            "Web Development and Administration.",
            "Photoshop Image handling.",
        ],
    },
    {
        title: "IT Systems Technician",
        company_name: "Post Nord AB Systems Information Management",
        icon: postnord,
        iconBg: "white",
        date: "2004 - 2013",
        points: [
            "Insourcing and Consolidation of IT Systems.",
            "IT Project Management.",
            "End-level IT Support.",
            "Windows Server Administration.",
            "Citrix XenApp Environment Administration and implementation.",
        ],
    },
    {
        title: "IT Supporter",
        company_name: "Copenhagen Municipallity",
        icon: kbhkommune,
        iconBg: "white",
        date: "2013 - 2015",
        points: [
            "Web Administration.",
            "Intranet Administration.",
            "Smartboards and Laptop repairs and Support.",
            "Systems Remote Deployment.",
            "End Level IT Support.",
            "IT Security.",
        ],
    },
    {
        title: "IT Supporter",
        company_name: "Hvidovre Hospital",
        icon: hvidovrehospital,
        iconBg: "white",
        date: "2015 - 2017",
        points: [
            "Installation and Deployment of IT Systems.",
            "IT and Systems Support of vital hospital equipment and products.",
        ],
    },
    {
        title: "Development Team Lead",
        company_name: "BACD USA LLC",
        icon: bacd,
        iconBg: "#E6DEDD",
        date: "2022 - Present",
        points: [
            "Leading the Development Team in Copenhagen.",
            "Developing and maintaining decentralized web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Developing and implementing DApps and Websites for our customers.",
            "Participating in code reviews.",
            "Handling DNS and Proxy server settings.",
            "End level customer support and Frontend developer.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Car Rent",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };