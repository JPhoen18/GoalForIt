import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {VideoResource} from '../videoresource.model';
import { Observable } from 'rxjs';
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

  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService) { }

  ngOnInit() {
    this.getItDone()

  }

  getItDone(){

      this.resourceservice
        .getVideoResources()
        .subscribe((data : VideoResource[])=>{
           console.log('Here is the proof')
           console.log(data)
           this.users$ = data
           console.log('Data requested ...')
           console.log(this.users$)
           console.log('This is the other stuff')
      //     console.log(this.message)
          // console.log(this.users$[0])
         })

    }

    getIndex(digit){
      this.digit = digit
      console.log("Here is the number I need")
      console.log(this.digit)
      this.data.passIndex(this.digit)
    }

}