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
];

export default projects;
