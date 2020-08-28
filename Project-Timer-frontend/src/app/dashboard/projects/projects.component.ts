import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@app-services/project.service';
import { Project } from '@app-interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(value => this.projects = value);
  }
}
