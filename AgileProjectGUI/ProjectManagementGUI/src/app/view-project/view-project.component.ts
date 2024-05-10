import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit{
  projects!: Project[]; 


  constructor(private router: Router, private projectService: ProjectServiceService) {
    this.projectService.getProjects()
    .subscribe( data => {
      this.projects = data;
    });
  }

  ngOnInit() {
   

  };
 
}
