export enum StackType {
  Frontend = "Frontend",
  Backend = "Backend",
  All = "All",
}

export enum ProjectType {
  Frontend = "Frontend",
  Backend = "Backend",
  FullStack = "Full Stack",
}

export interface Project {
  title: string;
  description: string;
  image: string;
  projectType: ProjectType;
  stack: StackItemStructure[];
  projectLink: string;
  frontendCode?: string;
  backCode?: string;
}

export interface StackItemStructure {
  name: string;
  image: string;
  type: StackType;
}
