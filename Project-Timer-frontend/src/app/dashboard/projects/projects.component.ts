import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '@app-interfaces/project.interface';
import { Subscription, of } from 'rxjs';
import { FirebaseService } from '@app-services/firebase.service';
import { ProjectService } from '@app-services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public projects: Project[];
  private storeSub: Subscription;

  constructor(private firebaseService: FirebaseService, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjectsFromDatabase();
    this.getProjectsFromStore();
  }

  private getProjectsFromDatabase(): void {
    const databaseSub = this.firebaseService.getProjectsFromDatabase()
      .subscribe(response => this.projectService.setProjects(response));
  }

  private getProjectsFromStore(): void {
    this.storeSub = this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
    }

  public deleteAllProjects(): void {
    const result = window.confirm('Are you sure you want to delete ALL projects?');
    if (!result) return;
    
    this.firebaseService.deleteAllProjects()
      .subscribe(response => {
        if (response === null) console.log('All projects deleted succesfully.');
        this.getProjectsFromDatabase();
      });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

}
