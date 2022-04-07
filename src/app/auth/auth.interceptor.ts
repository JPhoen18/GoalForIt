import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private resourceservice : ResourceService , private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.resourceservice.getToken())});
            return next.handle(clonedreq).pipe(
                tap( //tap from rxjs
                    event => { },
                    err => {
                        if (err.error.auth == false) {
                            this.router.navigateByUrl('/signup');
                        }
                    })
            );
        }
    }
}
