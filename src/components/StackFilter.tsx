import { useState } from "react";
import { StackItem, StackType } from "../types";
import StackList from "./StackList";

interface StackFilterProps {
  stackItems: StackItem[];
}

export const StackFilter = ({ stackItems }: StackFilterProps) => {
  const tabs = [StackType.All, StackType.Frontend, StackType.Backend];

  const [currentSelected, setSelected] = useState<StackType>(StackType.All);
  const [filteredStack, setFilterStack] = useState<StackItem[]>(stackItems);

  const handleFilter = (filterTo: StackType) => {
    setSelected(filterTo);

    if (filterTo === StackType.All) {
      setFilterStack(stackItems);
      return;
    }

    setFilterStack(
      stackItems.filter((stackItem) => stackItem.type === filterTo)
    );
  };

  return (
    <section className=" flex flex-col gap-2 text-white">
      <h3 className=" text-2xl">Stack</h3>
      <div className="flex gap-6  text-lg md:text-xl rounded-sm w-auto h-18 py-1 font-secondary  ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={` p-2 rounded-sm cursor-default ${
              tab === currentSelected
                ? "  border-b-2 text-xl font-bold"
                : "hover:bg-slate-50/5"
            }`}
            onClick={() => handleFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <StackList stackItems={filteredStack} />
    </section>
  );
};

export default StackFilter;
