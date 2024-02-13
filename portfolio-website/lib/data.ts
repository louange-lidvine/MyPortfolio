import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Weather from "@/public/weather.png";
import Topstrat from "@/public/topstrat.png";
import LikeUs from "@/public/likeUs.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "RCA",
        location: "Nyabihu, Rwanda",
        description:
            "I Joined Rwanda Coding Academy and pursued my career in Software Engineering and embeded Systems.",
        icon: React.createElement(LuGraduationCap),
        date: "2022",
    },
    {
        title: "Front-End Developer",
        location: "Kigali,Rwanda(remote)",
        description:
            "I worked as a front-end developer for summer holidays after my fast year in coding  I joined Kitech and Klab which were oth internship and offered soe aside team projects where clients offered Payments.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - 2023",
    },
    {
        title: "Web and Mobile developer",
        location: "Kigali, Rwanda(remote)",
        description:
            "I'm now a mobile and web developer and researcher  to provide strategic plan and project plan for clients by asko intergrating AI in oyr product  .",
        icon: React.createElement(FaReact),
        date: "2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "TopStrat",
        description:
            "I worked as a frontend developer and researcher.The project was aimed at helping to generate strategic plan for organisation according to client preferences ",
        tags: ["React", "Next.js", "Tailwind", "TypeScript"],
        imageUrl: Topstrat,
    },
    {
        title: "Like Us",
        description:
            "I worked as a frontend developer,project owner and Manager.The project was at connecting people and organisations to donat.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind"],
        imageUrl: LikeUs,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "TypeScript", "Tailwind", "RESTAPIs", "zustand"],
        imageUrl: Weather,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "zustand",
    "MongoDB",
    "Redux",
    "React-Native",
    "Express",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Framer Motion",
    "Flutter",
] as const;
