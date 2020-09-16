import { Component, OnInit } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { Observable } from 'rxjs';
import { FirebaseService } from '@app-services/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public projectList: Observable<any>;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList() {
    this.firebaseService
      .getProjectList()
      .snapshotChanges()
      .pipe(
        map((changes) => 
          {
            // console.log(changes.payload.val())
            return changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
          }
        )
      )
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

  deleteAllProjects() {
    const result = window.confirm('Are you sure you want to delete ALL projects?')
    if (!result) return
    this.firebaseService
      .deleteAllProjects()
      .catch((err) => console.log(err));
  }
}
