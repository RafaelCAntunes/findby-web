import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      var userType =  window.localStorage.getItem('userType');
      console.log(userType);
      console.log(route.data.role);
      if(userType === route.data.role){
        console.log('passei pelo canActivate');
        console.log('a role é: ' + route.data.role);
        return true;
      }

      else{
        this.router.navigate(['login']);
        console.log('cai no else');
        return false;
      }
    
  }

  
  
}
