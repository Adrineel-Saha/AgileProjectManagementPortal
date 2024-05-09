import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardProductOwnerService implements CanActivate{

  constructor(private router: Router,private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn() && this.authService.isUserProductOwner()){
      return true;
    }
    else if(this.authService.isUserLoggedIn() && !this.authService.isUserProductOwner())
      {
        alert("Not authorized");
        return false;
      }
    else{
        this.router.navigate(['login']);
        return false;
    }

  }
}
