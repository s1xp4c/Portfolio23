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
    chakra,
    tailwind,
    nodejs,
    mongodb,
    git,
    moralis,
    vite,
    bacd,
    postnord,
    kbhkommune,
    hvidovrehospital,
    blockdefi,
    etuga,
    rocketfuel,
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
        title: "NextAuth & Web3 Security",
        icon: web3,
    },
    {
        title: "Typescript & React",
        icon: mobile,
    },
    {
        title: "Frontend Interfaces",
        icon: backend,
    },
    {
        title: "2d & 3d Content",
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
        name: "Chakra UI",
        icon: chakra,
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
        name: "Moralis",
        icon: moralis,
    },
    {
        name: "Vite",
        icon: vite,
    },
];

const experiences = [{
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
    }, {
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
    }, {
        title: "Web Administrator",
        company_name: "Copenhagen Business School",
        icon: cbs,
        iconBg: "white",
        date: "1999 - 2001",
        points: [
            "Web Development and Administration.",
            "Photoshop Image handling.",
        ],
    }


];

const testimonials = [{
        testimonial: "Bla bla bla",
        name: "Some person",
        designation: "Some title",
        company: "Some Comany",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        testimonial: "Bla bla bla",
        name: "Some person",
        designation: "Some title",
        company: "Some Comany",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        testimonial: "Bla bla bla",
        name: "Some person",
        designation: "Some title",
        company: "Some Comany",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },

];

const projects = [{
        name: "BACD Finance",
        description: "Web3-Authentication-based platform that allows users to Login with Metamask wallet and see Blockchain holdings and transactions, Swap coins and see Real-time price charts, providing a convenient and efficient solution for decentralized finance needs.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "moralis",
                color: "orange-text-gradient",
            },
            {
                name: "nextauth",
                color: "lime-text-gradient",
            },
            {
                name: "chakraui",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "cyan-text-gradient",
            },
            {
                name: "threejs",
                color: "yellow-text-gradient",
            },
            {
                name: "wagmi",
                color: "purple-text-gradient",
            },
        ],
        image: blockdefi,
        source_code_link: "https://github.com/s1xp4c/BlockDefi",
    },
    {
        name: "RocketFuel",
        description: "Onboarding page for the RocketFuel tokensale and Community outreach platform with Content Management System and Real-time crypto market prices",
        tags: [{
                name: "webflow",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "restapi",
                color: "cyan-text-gradient",
            },
            {
                name: "photoshop",
                color: "purple-text-gradient",
            },
            {
                name: "typeform",
                color: "yellow-text-gradient",
            },
        ],
        image: rocketfuel,
        source_code_link: "https://github.com/",
    },
    {
        name: "eTuga",
        description: "Promotion page for the electric vehicle 'The TUGA' and onboarding platform for initial Tokensale.",
        tags: [{
                name: "webflow",
                color: "blue-text-gradient",
            },
            {
                name: "animation",
                color: "green-text-gradient",
            },
            {
                name: "typeform",
                color: "pink-text-gradient",
            },
        ],
        image: etuga,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };