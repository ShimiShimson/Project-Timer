import { Project } from './project.interface';

export interface User {
  id: number;
  username: string;
  email: string;
  projects: Project[];
}
