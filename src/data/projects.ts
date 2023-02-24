import { Project, ProjectType } from "../types";
import { findStackItemsByName } from "../utils/stackUtils";

const projects: Project[] = [
  {
    title: "Tweeter",
    description:
      "Tweeter is a clone of Twitter, in which users can create, delete, and edit tweets. However, deleting and editing tweets is only allowed if the user is the author of the tweet. In addition, it has a function of filtering tweets by category, allowing users to search and view specific tweets.",

    image: "/assets/images/tweeter-icon.svg",
    stack: findStackItemsByName([
      "React",
      "Typescript",
      "Redux",
      "NodeJS",
      "Express",
      "MUI",
      "MongoDB",
    ]),
    projectLink: "https://tweeterdev.netlify.app/",
    frontendCode: "https://github.com/Jacky16/Tweeter-Front",
    backCode: "https://github.com/Jacky16/Tweeter-Back",
    projectType: ProjectType.FullStack,
  },

  {
    title: "Tool AI",
    description:
      "Tool AI is a website where users can use AI to detect if a email is spam or not, and to generate questions and answers to programming languages. This is a submission for a hackaton of streamer midudev",
    image: "/assets/images/toolai-icon.webp",
    stack: findStackItemsByName(["React", "Redux", "Typescript", "Tailwind"]),
    projectLink: "https://tool-ai.netlify.app/",
    frontendCode: "https://github.com/Jacky16/tool-ai",
    projectType: ProjectType.Frontend,
  },
];

export default projects;
