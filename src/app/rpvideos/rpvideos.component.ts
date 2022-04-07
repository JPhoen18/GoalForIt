import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {VideoResource} from '../videoresource.model';
import { Observable } from 'rxjs';
import { HostListener } from "@angular/core";
import {DataService} from '../data.service';



@Component({
  selector: 'app-rpvideos',
  templateUrl: './rpvideos.component.html',
  styleUrls: ['./rpvideos.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *',[
        query(':enter', //only defined elements being added, and where they are going from and to
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true }),
        query( ':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
      })
    ])
  ])

  ]
})
export class RPVideosComponent implements OnInit {

  digit: number
  users$ : VideoResource[]
  screenHeight: any
  screenWidth: any
  parentElem: any

  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService) {
     //this.getSize();
     }

//    @HostListener('window:resize', ['$event'])
//      getSize(event?) {
//            this.screenHeight = window.innerHeight;
//            this.screenWidth = window.innerWidth;
//            console.log(this.screenHeight, this.screenWidth);


            //if(sideNav.style.visibility == 'visible'){
            //window.alert(this.screenWidth);
            //if width greater than 600.  Call method that will check if sidebar is visible. If so, adjust the css of the mother div.
        //    var firstSideNav = document.getElementById('menuholder');

        //    if(firstSideNav != null){
        //    window.alert(firstSideNav.style.position);
        //  }
//      }

  ngOnInit() {

    this.getItDone()



  }

  getItDone(){

      this.users$ = this.resourceservice
                     .getVideoResources();
        //.subscribe((res)=>{
        //   console.log('Here is the proof')
        //   console.log(res)
        //   this.users$ = res;
           console.log('Data requested ...')
           console.log(this.users$)
           console.log('This is the other stuff')
      //     console.log(this.message)
          // console.log(this.users$[0])
//         })
//var eleElem = document.getElementsByClassName("container");
//console.log(eleElem);
//this.parentElem = eleElem[0].parentElement;
//console.log(this.parentElem);
//code that will let me dynamically alter the appearance of the usercomponent container, atleast while in the resourcepage component

//if(this.screenWidth > 630){

//  $(this.parentElem).css("width", "800px");
  //$("#content").css("width", "700px");
//}
console.log("here")
//  window.location.reload();
    }

    getIndex(digit){
      this.digit = digit
      console.log("Here is the number I need")
      console.log(this.digit)
      this.data.passIndex(this.digit)
    }

}
