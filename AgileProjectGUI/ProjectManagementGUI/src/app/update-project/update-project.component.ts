import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class ProjectsComponent implements OnInit{
  
  submitted = false;

  projects!: Project[];
  // projectStatus!:string;

  constructor(private router: Router, private projectService: ProjectServiceService) {

    this.projectService.getProjects()
        .subscribe( data => {
          this.projects = data;
        });
    }

  ngOnInit() {
  }

  
  updateStatus(projectCode :number, project : Project) {
    
    this.submitted=true;
    // project.status=this.projectStatus;
    this.projectService.updateProject(projectCode,project)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.project = new Project();
    setTimeout(() => {
        this.submitted=false;
      }, 3000)
  }

}
