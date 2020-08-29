import { Component, OnInit } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { Observable } from 'rxjs';
import { FirebaseService } from '@app-services/firebase.service';

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
    this.projectList = this.firebaseService.getProjects();
  }
}
