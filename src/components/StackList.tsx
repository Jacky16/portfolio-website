import type { StackItemStructure } from "../types";
import StackItem from "./StackItem";

interface StackDisplayProps {
  stackItems: StackItemStructure[];
}

const StackList = ({ stackItems }: StackDisplayProps) => (
  <ul className="flex gap-4 flex-wrap h-80 md:h-60 overflow-y-auto justify-center">
    {stackItems.map((item) => (
      <StackItem key={item.name} item={item} />
    ))}
  </ul>
);

export default StackList;
