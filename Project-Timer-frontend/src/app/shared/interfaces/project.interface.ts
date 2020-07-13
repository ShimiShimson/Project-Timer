import { Task } from "./task.interface";

export interface Project {
    id: number;
    projectName: string;
    secondsClocked: number;
    tasks: Task[];
}