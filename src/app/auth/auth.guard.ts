import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private resourceservice : ResourceService, private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.resourceservice.isLoggedIn()) {
        //check to make sure if the user is logged in, or basically if
        //the token is expired or not. If token is expired, navigate to signin
        this.router.navigateByUrl('/signin');
        this.resourceservice.deleteToken();
      }
    return true;
  }
}
