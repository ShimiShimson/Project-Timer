import { Task } from './task.interface';

export interface Project {
  key?: string
  id?: number;
  projectName: string;
  secondsClocked?: number;
  tasks?: Task[];
}
