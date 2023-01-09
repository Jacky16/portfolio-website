import * as icons from "simple-icons";
import { StackItem, StackType } from "../types";

const stack: StackItem[] = [
  {
    name: "React",
    image: icons.siReact.source,
    type: StackType.Frontend,
  },
  {
    name: "Express",
    image: icons.siExpress.source,
    type: StackType.Backend,
  },
];

export default stack;
