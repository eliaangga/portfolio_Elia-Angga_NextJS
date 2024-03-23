import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import CCLaundry from "../public/CCLaundry.png"
import KEP from "../public/KEP.png"
import Axtorix from "../public/Axtorix.png"
import IndonesianaidMobile from "@/public/indonesianaidmobile.png";
import IndonesianaidWeb from "@/public/indonesianaidWeb.png";
import ComingSoon from "@/public/ComingSoon.png";
import NotImage from "@/public/NotImage.png";

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
    title: "Internship UIUX, Frontend, and Graphic Design in Indonesian AID",
    location: "DKI Jakarta (Minister Of Finance)",
    description:
      "I did an internship for 3 months, in those 3 months I created the UI of the Indonesian AID Website and Application using Figma from the beginning of Sketching to Prototyping, then also as a Frontend to create a website display using ReactJS and RestAPI to connect between data, and besides that I also as Graphic Design to create design content in Indonesian AID.",
      icon: React.createElement(CgWorkAlt),
    date: "Juni 2023 - August 2023",
  },
  {
    title: "Internship Internal Audior in Indonesian AID",
    location: "DKI Jakarta (Minister Of Finance)",
    description:
      "I was an intern for 4 months, and during those 4 months I created and revised and unified various existing SOPs, then in the SOP I also worked on FlowChart using the BPMN model provisions. ",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - December 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Elgeka Mobile App | UIUX",
    date: "October 2023 - Present",
    description:
      "I worked on a project as UIUX in Elgeka Team to develop Health Monitoring",
    tags: ["Figma", "User Interface", "User Experience"],
    imageUrl: ComingSoon,
  },
  {
    title: "Indonesian AID | UIUX Web and Frontend",
    date: "June 2023 - August 2023",
    description:
      "During my Onsite internship. In addition to designing, creating websites such as language changer features, pagination, etc",
    tags: ["ReactJS", "Figma", "Adobe Photoshop", "Git"],
    imageUrl: IndonesianaidWeb,
  },
  {
    title: "Indonesian AID | UIUX Mobile",
    date: "June 2023 - August 2023",
    description:
      "During my Onsite internship, I created the design for the Indonesian AID application.",
    tags: ["Figma", "User Interface", "User Experience"],
    imageUrl: IndonesianaidMobile,
  },
  {
    title: "Axtorix | UIUX and Frontend",
    date: "September 2023 - January 2024",
    description:
      "During the startup, besides designing, I created a recruiter and applier website on the talent/actor management system.",
    tags: ["Figma", "Laravel", "Git"],
    imageUrl: Axtorix,
  },
  {
    title: "Wedding Digital",
    date: "January 2024",
    description:
      "My project for 1 month, creating a digital wedding website, with features such as RestAPI, Google AppScript, and Paginatition.",
    tags: ["ReactJS", "AppScript", "Tailwind"],
    imageUrl: NotImage,
  },
  {
    title: "Event Website Digital KEP",
    date: "Februari 2024",
    description:
      "My project for 1 month was also to create a digital event website, with features such as RestAPI, and Pagination.",
      tags: ["ReactJS", "Tailwind"],
    imageUrl: KEP,
  },
  {
    title: "CCLaundry | UIUX, Frontend and System Analist",
    date: "January 2023 - June 2023",
    description:
      "My project for 6 months was also, creating a website and Mobile application, for ordering and delivering laundry with a website and Application.",
      tags: ["CI/CD", "Flutter", "Dart"],
    imageUrl: CCLaundry,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Laravel",
  "Git",
  "Tailwind",
  "Figma",
  "Adobe Photoshop",
  "App Script",
  "Flutter", 
  "Dart"
] as const;
