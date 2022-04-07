import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { HostListener } from "@angular/core";
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoalForIt';
  screenHeight: any
  screenWidth: any
  parElem: any





constructor(private resourceservice : ResourceService, private data : DataService){
 }




 async deleteEverything(){

  await this.resourceservice.deleteVidList();

  await this.resourceservice.deleteWebList();

  //await this.resourceservice.deleteVidList();

  await this.resourceservice.deleteRedList();

  //need to delete the saved resource lists that this component consumes.
  await this.resourceservice.deleteVidResList()
    .subscribe((res)=>{
      console.log("Video resources have been deleted.");
    });

  await this.resourceservice.deleteWebResList()
  .subscribe((res)=>{
    console.log("Web resources have been deleted.");
  });

  await this.resourceservice.deleteRedResList()
  .subscribe((res)=>{
    console.log("Reddit resources have been deleted.");
  });
  ///

  await this.data.deleteGoalTitle();

  }
}
