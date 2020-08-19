import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projects: Project[] = [];

  public addProject(project: Project): void {
    this.projects.push(project);
    console.log(this.projects);
  }
}
