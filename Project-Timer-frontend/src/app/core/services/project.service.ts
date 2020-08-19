import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projects: Project[] = [];
  private projects$ = new BehaviorSubject<Project[]>(this.projects);

  public addProject(project: Project): void {
    this.projects.push(project);
    if (this.isLocalEmpty()) {
      this.ifLocalEmpty(project);
    } else {
      this.ifLocalHaveProjects(project);
    }
  }

  private isLocalEmpty (): boolean {
    if(!JSON.parse(localStorage.getItem("projectList"))) return true
    return false;
  }

  private ifLocalHaveProjects (project: Project) {
      const jsonData = JSON.parse(localStorage.getItem("projectList"));
      const projectList: Project[] = jsonData;
      projectList.push(project);
      localStorage.setItem("projectList", JSON.stringify(projectList));
  }

  private ifLocalEmpty (project: Project) {
    const projectList = [];
    projectList.push(project);
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }

  public getProjects(): BehaviorSubject<Project[]> {
    if (!this.isLocalEmpty()) {
      const jsonData = JSON.parse(localStorage.getItem("projectList"));
      this.projects.push(...jsonData);
    }
    return this.projects$;
  }
}
