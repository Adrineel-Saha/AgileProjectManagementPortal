import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from './resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceServiceService {

  private addResourceURL='http://localhost:8080/api/projects/addresource';

  constructor(private http:HttpClient) { }

  public addResource(resource : Resource) {
        return this.http.post<string>(this.addResourceURL, resource,{responseType:'text' as 'json'});
    }
}
