export enum StackType {
  Frontend = "Frontend",
  Backend = "Backend",
  All = "All",
}

export interface StackItemStructure {
  name: string;
  image: string;
  type: StackType;
}
