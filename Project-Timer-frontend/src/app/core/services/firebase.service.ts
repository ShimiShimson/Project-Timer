import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public db: AngularFireDatabase) {}

  getProjects(): Observable<any> {
    return this.db.list('projectList').valueChanges();
  }

  updateDatabase(result: string): void {
    this.db.list('projectList').push({ content: result });
    result = '';
  }
}
