import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';
import { Resource } from '../resource';
import { ResourceServiceService } from '../resource-service.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit{
  resource: Resource = new Resource();
  submitted = false;
  projects!: Project[];
  resourceUserId!: string;

  constructor(private router: Router, private projectService: ProjectServiceService, private resourceService: ResourceServiceService) { 
    this.projectService.getProjects()
    .subscribe( data => {
      // this.projects = data;
      this.projects = data.filter(project => project.status !== 'Cancelled');
      // console.log(data);
      
    });
  }

  ngOnInit() {
  }

  newIntern(): void {
    this.submitted = false;
    this.resource = new Resource();
  }
  save() {
    this.resourceService.addResource(this.resource)
      .subscribe(data => {this.resourceUserId=data;}, error => console.log(error));
    
    this.resource = new Resource();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
