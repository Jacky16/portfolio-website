import type { StackItemStructure } from "../types";

interface StackItemProps {
  item: StackItemStructure;
}

const StackItem = ({ item: { name, image } }: StackItemProps) => (
  <li className="stack-item p-2 flex flex-col items-center justify-start gap-2 rounded-lg w-28  text-center">
    <img height="32" width="32" src={image} alt={`${name} icon`} />
    <span>{name}</span>
  </li>
);

export default StackItem;
