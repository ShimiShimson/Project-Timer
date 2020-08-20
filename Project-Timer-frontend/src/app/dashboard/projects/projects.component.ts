import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface';
import { ProjectService } from '../../core/services/project.service';

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
