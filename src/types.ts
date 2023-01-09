export enum StackType {
  Frontend = "Frontend",
  Backend = "Backend",
  All = "All",
}

export interface StackItem {
  name: string;
  image: string;
  type: StackType;
}
