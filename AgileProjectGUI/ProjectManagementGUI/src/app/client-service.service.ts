import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client} from './client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private retrieveClientsURL = 'http://localhost:8080/api/clients';
 
  constructor(private http:HttpClient) { }
   
  public getClients() {
    return this.http.get<Client[]>(this.retrieveClientsURL);
  }
}
