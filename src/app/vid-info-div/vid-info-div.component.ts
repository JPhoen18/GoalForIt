import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { ResourceService } from '../resource.service';
import {DataService} from '../data.service';
import {VideoResource} from '../videoresource.model';
import { Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';


@Component({
  selector: 'app-vid-info-div',
  templateUrl: './vid-info-div.component.html',
  styleUrls: ['./vid-info-div.component.css']
})
export class VidInfoDivComponent implements OnInit {

  index: number
  currentUrl: string
  moreusers$ : VideoResource[]
  oneuser$: VideoResource
  vidtitle: string
  vidchanneltitle: string
  vidurl: string
  viddescription: string
  placeholder: any


  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) {
  router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
 }

  ngOnInit() {

    this.data.currentMessage.subscribe((res) =>{
       console.log("Here is the index")
       console.log(res)
       this.index = res

    })
  //  this.placeholder = this.resourceservice.getVideoResources().pipe(
  //  publish(),
  //  refCount()
//);

            this.moreusers$ = this.resourceservice.getVideoResources();
            console.log('Web Data requested ...')
            console.log(this.moreusers$)
            console.log(this.moreusers$[this.index+1])
            console.log("Index")
            console.log(this.index)
            this.oneuser$ = this.moreusers$[this.index]
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
  sendItBack(vidtitle, vidchanneltitle, vidurl, viddescription){
    this.resourceservice
        .insertVidResource(vidtitle, vidchanneltitle, vidurl, viddescription);
  }



}
