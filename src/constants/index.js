import { CodeClause, Nullclass, MuskurahatFoundation, tesla } from "../assets/images";
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
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "CodeClause",
        icon: CodeClause,
        iconBg: "#b7e4c7",
        date: "October 2023 - November 2023",
        points: [
            "As a Web Developer Intern at Code Clause, I collaborated with the development team to assist in creating and maintaining web applications.",
            "My responsibilities included implementing responsive and user-friendly frontend interfaces using HTML, CSS and JavaScript.",
            "My role allowed me to gain practical experience in web development and contribute to the delivery of high-quality web solutions.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "NullClass Edtech Private Limited",
        icon: Nullclass,
        iconBg: "#accbe1",
        date: "April 2023 - June 2023",
        points: [
            "During my time at NullClass, I had the incredible opportunity to work as a full-stack web developer specializing in the MERN stack.",
            "From creating interactive user interfaces to developing efficient backend systems. I implemented chatbot, social media community and payment Gateway in my training project.",
            "NullClass provided on invaluable platform for honing my abilities and driving real-world impact through cutting-edge technology.",
        ],
    },
    {
        title: "Fundraising Volunteer",
        company_name: "Muskurahat Foundation",
        icon: MuskurahatFoundation,
        iconBg: "#fbc3bc",
        date: "December 2022 - January 2023",
        points: [
            "Created and implemented fundraising plans to encourage donations and distribute funding.",
            "Proposed fundraising opportunities to potential donors to increase sources of funding.",
        ],
    },
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
        link: 'https://github.com/arssshhhk',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arsh-khan-56b923202/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/arssshhhk/amazonpricetracker',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/arssshhhk/carfindingapp',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/arssshhhk/AIsummarizer',
    }
];