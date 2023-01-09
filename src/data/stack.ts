import * as icons from "simple-icons";
import { StackItemStructure, StackType } from "../types";

const getIconImage = (stackTitle: string, color?: string) =>
  color === undefined
    ? `https://cdn.simpleicons.org/${stackTitle}`
    : `https://cdn.simpleicons.org/${stackTitle}/${color}`;

const stack: StackItemStructure[] = [
  {
    name: "Javascript",
    image: getIconImage(icons.siJavascript.title),
    type: StackType.All,
  },
  {
    name: "Typescript",
    image: getIconImage(icons.siTypescript.title),
    type: StackType.All,
  },
  {
    name: "HTML5",
    image: getIconImage(icons.siHtml5.title),
    type: StackType.Frontend,
  },
  {
    name: "CSS3",
    image: getIconImage(icons.siCss3.title),
    type: StackType.Frontend,
  },
  {
    name: "React",
    image: getIconImage(icons.siReact.title),
    type: StackType.Frontend,
  },
  {
    name: "Redux",
    image: getIconImage(icons.siRedux.title),
    type: StackType.Frontend,
  },
  {
    name: "Bem",
    image: getIconImage(icons.siBem.title, "white"),
    type: StackType.Frontend,
  },
  {
    name: "Tailwind",
    image: getIconImage("tailwindcss"),
    type: StackType.Frontend,
  },
  {
    name: "SASS",
    image: getIconImage(icons.siSass.title),
    type: StackType.Frontend,
  },
  {
    name: "Material-UI",
    image: getIconImage(icons.siMui.title),
    type: StackType.Frontend,
  },
  {
    name: "Styled Components",
    image: getIconImage("styledcomponents"),
    type: StackType.Frontend,
  },
  {
    name: "NodeJS",
    image: getIconImage(icons.siNodedotjs.title),
    type: StackType.Backend,
  },
  {
    name: "Express",
    image: getIconImage(icons.siExpress.title, "white"),
    type: StackType.Backend,
  },
  {
    name: "MongoDB",
    image: getIconImage(icons.siMongodb.title),
    type: StackType.Backend,
  },
  {
    name: "JSON Web Token",
    image: getIconImage("jsonwebtokens", "white"),
    type: StackType.Backend,
  },
  {
    name: "Sharp",
    image: getIconImage(icons.siSharp.title),
    type: StackType.Backend,
  },

  {
    name: "Supabase",
    image: getIconImage(icons.siSupabase.title),
    type: StackType.Backend,
  },
];

export default stack;
