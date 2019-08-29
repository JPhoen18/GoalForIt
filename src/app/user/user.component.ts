import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  router: any
  componentName: any

  constructor(private resourceservice : ResourceService, private _router : Router,
    private data: DataService) {  this.router = _router.url;
   }



  ngOnInit() {
     console.log(this.router);
  }

  changeOfRoute($event){
    console.log($event.constructor.name);
    this.componentName = $event.constructor.name;
    console.log(this.componentName);
    console.log(typeof(this.componentName));
  }

  onLogout(){
    this.resourceservice.deleteToken();
    this._router.navigateByUrl('/signin');
  }



}
