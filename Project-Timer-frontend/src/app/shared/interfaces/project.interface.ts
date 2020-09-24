import { Task } from './task.interface';

export interface Project {
  key?: string
  id?: number;
  projectOwner?: string;
  projectName: string;
  secondsClocked?: number;
  tasks?: Task[];
}
