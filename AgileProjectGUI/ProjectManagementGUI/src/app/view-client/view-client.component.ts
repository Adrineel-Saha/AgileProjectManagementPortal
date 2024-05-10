import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  clients!: Client[];


  constructor(private router: Router, private clientService: ClientServiceService) {
    this.clientService.getClients()
    .subscribe( data => {
      this.clients = data;
    });
 
    
  }

  ngOnInit() {
   

  };
  
}
