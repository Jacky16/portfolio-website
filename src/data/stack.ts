import { StackItemStructure, StackType } from "../types";
import { getIconImage } from "../utils/stackUtils";

const stack: StackItemStructure[] = [
  {
    name: "Javascript",
    image: getIconImage("javascript"),
    type: StackType.All,
  },
  {
    name: "Typescript",
    image: getIconImage("typescript"),
    type: StackType.All,
  },
  {
    name: "HTML5",
    image: getIconImage("html5"),
    type: StackType.Frontend,
  },
  {
    name: "CSS3",
    image: getIconImage("css3"),
    type: StackType.Frontend,
  },
  {
    name: "React",
    image: getIconImage("react"),
    type: StackType.Frontend,
  },
  {
    name: "Redux",
    image: getIconImage("redux"),
    type: StackType.Frontend,
  },
  {
    name: "Bem",
    image: getIconImage("bem", "white"),
    type: StackType.Frontend,
  },
  {
    name: "Tailwind",
    image: getIconImage("tailwindcss"),
    type: StackType.Frontend,
  },
  {
    name: "SASS",
    image: getIconImage("sass"),
    type: StackType.Frontend,
  },
  {
    name: "MUI",
    image: getIconImage("mui"),
    type: StackType.Frontend,
  },
  {
    name: "Styled Components",
    image: getIconImage("styledcomponents"),
    type: StackType.Frontend,
  },
  {
    name: "NodeJS",
    image: getIconImage("node.js"),
    type: StackType.Backend,
  },
  {
    name: "Express",
    image: getIconImage("express", "white"),
    type: StackType.Backend,
  },
  {
    name: "MongoDB",
    image: getIconImage("mongodb"),
    type: StackType.Backend,
  },
  {
    name: "JSON Web Token",
    image: getIconImage("jsonwebtokens", "white"),
    type: StackType.Backend,
  },
  {
    name: "Sharp",
    image: getIconImage("sharp"),
    type: StackType.Backend,
  },
  {
    name: "Supabase",
    image: getIconImage("supabase"),
    type: StackType.Backend,
  },
];

export default stack;
