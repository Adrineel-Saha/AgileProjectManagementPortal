import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  
  private retrieveProjectsURL = 'http://localhost:8080/api/projects';
  private addProjectURL = 'http://localhost:8080/api/projects/new';
  private updateProjectURL = 'http://localhost:8080/api/projects'

  constructor(private http:HttpClient) { }
   
  public getProjects() {
    return this.http.get<Project[]>(this.retrieveProjectsURL);
  }

  public addProject(project : Project) {
  //  console.log("Project:"+project.clientDTO.name);
    return this.http.post<Project>(this.addProjectURL, project);
  }

  public updateProject(projectCode : number,project : Project){
    return this.http.put<Project>(this.updateProjectURL+"/"+projectCode+"/update",project);
  }


}
