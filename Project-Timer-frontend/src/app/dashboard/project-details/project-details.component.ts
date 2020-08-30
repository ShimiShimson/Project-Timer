import { Component, Input } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { FirebaseService } from '@app-services/firebase.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  @Input() project: Project;

  constructor(private firebaseService: FirebaseService) {}

  updateProjectName(projectName: string) {
    this.firebaseService.updateProject(this.project.key, {
      projectName: projectName,
    });
  }

  deleteProject() {
    this.firebaseService
      .deleteProject(this.project.key)
      .catch((err) => console.log(err));
  }
}
