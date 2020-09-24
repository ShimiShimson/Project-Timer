import { Injectable } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = 'https://project-timer-shimi.firebaseio.com/projectList';

  constructor(private http: HttpClient) { }

  public getProjectsFromDatabase(): Observable<Project[]> {
    return this.http.get(this.dbPath + '.json')
      .pipe(map(projects => {
          const projectsArr = [];
          for (const key in projects) {
            projectsArr.push({ key: key, ...projects[key] });
          }
          return projectsArr;
      }));
  }

  public createProject(project: Project): Observable<Object> {
    return this.http.post(this.dbPath + '.json', project)
      .pipe(catchError(error => of(`Error caught: ${error.message}`)));
  }

  public updateProject(key: string, project: Project): Observable<Object> {
    return this.http.put(this.dbPath + `/${key}.json`, project)
      .pipe(catchError(error => of(`Error caught: ${error.message}`)));
  }

  public deleteProject(key: string): Observable<Object> {
    return this.http.delete(this.dbPath + `/${key}s.json`)
      .pipe(catchError(error => of(`Error caught: ${error.message}`)));
  }

  public deleteAllProjects(): Observable<Object> {
    return this.http.delete(this.dbPath + '.json')
      .pipe(catchError(error => of(`Error caught: ${error.message}`)));
  }

}
