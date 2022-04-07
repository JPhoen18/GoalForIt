import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { ResourceService } from '../resource.service';
import {DataService} from '../data.service';
import {Resource} from '../resource.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-info-div',
  templateUrl: './web-info-div.component.html',
  styleUrls: ['./web-info-div.component.css']
})
export class WebInfoDivComponent implements OnInit {

  index: number
  currentUrl: string
  moreusers$ : Resource[]
  oneuser$: Resource

  webtitle: string
  weburl: string
  websummary: string

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) {
  router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
 }

  ngOnInit() {

    this.data.currentMessage.subscribe((res) =>{
       console.log("Here is the index")
       console.log(res)
       this.index = res

    })

    this.moreusers$ = this.resourceservice.getResources();
            console.log('Web Data requested ...')
            console.log(this.moreusers$)
            console.log(this.moreusers$[this.index+1])
            console.log("Index")
            console.log(this.index)
            this.oneuser$ = this.moreusers$[this.index];
            console.log("Check again")
            console.log(this.oneuser$)
       //     console.log(this.message)
           // console.log(this.users$[0])

  //  getIndex(this.iD){
    //  this.index = this.iD
    //  console.log("Here is the appropriate index")
  //    console.log(this.index)
  //  }
  }

  sendItBack(webtitle, weburl, websummary){
    this.resourceservice
        .insertResource(webtitle, weburl, websummary);
  }



}
