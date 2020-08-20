import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectList: Project[] = [];
  private projects$ = new BehaviorSubject<Project[]>(this.projectList);
  private jsonData = JSON.parse(localStorage.getItem('projectList'))
  
  public addProject(project: Project): void {
    if (this.jsonData) this.projectList.push(...this.jsonData);
    this.projectList.push(project);
    localStorage.setItem('projectList', JSON.stringify(this.projectList));
  }

  public getProjects(): BehaviorSubject<Project[]> {
    return this.projects$;
  }
}
