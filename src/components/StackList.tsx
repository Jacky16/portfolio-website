import type { StackItem } from "../types";

interface StackDisplayProps {
  stackItems: StackItem[];
}

const StackList = ({ stackItems }: StackDisplayProps) => (
  <ul>
    {stackItems.map((stackItem) => (
      <li>{stackItem.name}</li>
    ))}
  </ul>
);

export default StackList;
