import { useState } from "react";
import { StackItemStructure, StackType } from "../types";
import StackList from "./StackList";

interface StackFilterProps {
  stackItems: StackItemStructure[];
}

export const StackFilter = ({ stackItems }: StackFilterProps) => {
  const tabs = [StackType.All, StackType.Frontend, StackType.Backend];

  const [currentSelected, setSelected] = useState<StackType>(StackType.All);
  const [filteredStack, setFilterStack] =
    useState<StackItemStructure[]>(stackItems);

  const handleFilter = (filterTo: StackType) => {
    setSelected(filterTo);

    if (filterTo === StackType.All) {
      setFilterStack(stackItems);
      return;
    }

    setFilterStack(
      stackItems.filter(
        (stackItem) =>
          stackItem.type === filterTo || stackItem.type === StackType.All
      )
    );
  };

  return (
    <div className="flex flex-col gap-4 md:h-[27rem] text-white p-4 bg-background-color shadow-2xl shadow-primary-color/20 shadow-4xl rounded-md ">
      <div className="flex gap-6  text-lg md:text-xl rounded-sm w-auto h-18  font-secondary justify-center md:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-2 rounded-md cursor-default ${
              tab === currentSelected
                ? "border-b-2 text-xl font-bold text-primary-color border-primary-color"
                : "hover:bg-slate-400"
            }`}
            onClick={() => handleFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <StackList stackItems={filteredStack} />
    </div>
  );
};

export default StackFilter;
