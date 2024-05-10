import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientServiceService } from '../client-service.service';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit{
  project: Project = new Project();
  submitted = false;
  clients!: Client[];

  constructor(private router: Router, private clientService: ClientServiceService, private projectService: ProjectServiceService) { 
    this.clientService.getClients()
    .subscribe( data => {
      this.clients = data;
      // console.log(data);
      
    });
  }

  ngOnInit() {
  }

  newIntern(): void {
    this.submitted = false;
    this.project = new Project();
  }
  save() {
  //  console.log("***project:"+this.project.clientDTO.name);
    this.projectService.addProject(this.project)
      .subscribe(data => console.log(data), error => console.log(error));
    this.project = new Project();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
