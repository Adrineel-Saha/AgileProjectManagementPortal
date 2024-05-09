import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string= '';
  password :string= '';
  invalidLogin = false
  loginError: string='';

  constructor(private router: Router,private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    // console.log(this.username);
    // console.log(this.password);

    // if ( this.loginservice.authenticate(this.username, this.password)) {
    //   this.router.navigate(['app-navigation']);
    // } else{
    //   this.invalidLogin = true;
    //   alert("Either your username or password is incorrect!!!");
    //   this.username='';
    //   this.password='';
    // }
    this.loginservice.authenticate(this.username, this.password).subscribe(authenticated => {
      if (authenticated) {
        this.router.navigate(['navigation']);
        // console.log("Inside home component");
        this.loginError='';
        // this.invalidLogin = false;
      } else {
        // this.loginError='Incorrect Username or Password. Please try again!';
        // console.log("Error logging in");
        this.invalidLogin = true;
        alert("Either your username or password is incorrect!!!");
        // this.username = '';
        // this.password = '';
      }
      this.username = '';
      this.password = '';
    });
  }

  isLoggedIn():boolean{
    return !this.loginservice.isUserLoggedIn();
  }
}
