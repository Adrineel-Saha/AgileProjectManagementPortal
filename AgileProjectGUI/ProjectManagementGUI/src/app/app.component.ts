import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project Management GUI';
  role!: string | null;
 
  ngOnInit(){
      this.role = this.readLocalStorageValue('role');
  }

  readLocalStorageValue(key: string) {
      return localStorage.getItem(key);
  }
}
