import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import {ShareInfoServiceService} from '../share-info-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  router: any
  componentName: any
  tokenThere: any

  constructor(private resourceservice : ResourceService, private _router : Router,
    private data: DataService, private shareInfVar: ShareInfoServiceService) {  this.router = _router.url;
      this.shareInfVar.getLogOutCheck().subscribe(() =>{
          this.checkTokenForLogout();
      })

   }



  ngOnInit() {
     console.log(this.router);
     this.checkTokenForLogout();

  }

  changeOfRoute($event){
    console.log($event.constructor.name);
    this.componentName = $event.constructor.name;
    console.log(this.componentName);
    console.log(typeof(this.componentName));
  }

  onLogout(){
    this.resourceservice.deleteToken();
    this.checkTokenForLogout();
    this._router.navigateByUrl('/signin');
  }

  checkTokenForLogout(){
    this.tokenThere = this.resourceservice.getToken();
    console.log(this.tokenThere);
  }





}
