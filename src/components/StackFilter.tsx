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
      stackItems.filter((stackItem) => stackItem.type === filterTo)
    );
  };

  return (
    <section className=" flex flex-col gap-2 text-white  ">
      <h3 className=" text-2xl">Stack</h3>
      <article className="bg-background-color shadow-2xl shadow-primary-color/20 shadow-4xl rounded-md md:px-4 py-2 ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6  text-lg md:text-xl rounded-sm w-auto h-18 py-1 font-secondary justify-center md:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={` p-2 rounded-md cursor-default ${
                  tab === currentSelected
                    ? "  border-b-2 text-xl font-bold text-primary-color border-primary-color"
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
      </article>
    </section>
  );
};

export default StackFilter;
