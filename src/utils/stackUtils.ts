import stack from "../data/stack";

export const findStackItemsByName = (stackName: string[]) =>
  stack.filter((stackItem) =>
    stackName.some(
      (stackNameElement) =>
        stackNameElement.toLocaleLowerCase() ===
        stackItem.name.toLocaleLowerCase()
    )
  );

export const getIconImage = (stackTitle: string, color?: string) =>
  color === undefined
    ? `https://cdn.simpleicons.org/${stackTitle}`
    : `https://cdn.simpleicons.org/${stackTitle}/${color}`;
