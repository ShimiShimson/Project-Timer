import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Project } from '@app-interfaces/project.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private dbPath = '/projectList';
  projectListRef: AngularFireList<Project> = null;

  constructor(private db: AngularFireDatabase) {
    this.projectListRef = db.list(this.dbPath);
  }

  getProjects(): Observable<any> {
    return this.db.list(this.dbPath).valueChanges();
  }

  createProject(project: Project): void {
    this.projectListRef.push(project);
  }

  updateProject(key: string, data: any): Promise<void> {
    return this.projectListRef.update(key, data)
  }

  deleteProject(key: string): Promise<void> {
    return this.projectListRef.remove(key);
  }

  getProjectList(): AngularFireList<Project> {
    return this.projectListRef;
  }

  deleteAllProjects(): Promise<void> {
    return this.projectListRef.remove();
  }

  stateChanges() {
    this.projectListRef.stateChanges().subscribe(v => console.log(v))
  }
}
