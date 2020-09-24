import { Injectable } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects$ = new Subject<Project[]>();

  public getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  public setProjects(projects: Project[]): void {
    this.projects$.next(projects);
  }

}
