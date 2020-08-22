import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectList: Project[] = [];
  private projects$ = new BehaviorSubject<Project[]>(this.projectList);
 
  constructor() {
    const jsonData = JSON.parse(localStorage.getItem('projectList'));
    if (jsonData) {
      this.projectList.push(...jsonData);
    }
  }
  
  public addProject(project: Project): void {
    this.projectList.push(project);
    localStorage.setItem('projectList', JSON.stringify(this.projectList));
  }

  public getProjects(): BehaviorSubject<Project[]> {
    return this.projects$;
  }
}
