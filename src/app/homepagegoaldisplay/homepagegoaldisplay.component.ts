import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import * as moment from 'moment';


@Component({
  selector: 'app-homepagegoaldisplay',
  templateUrl: './homepagegoaldisplay.component.html',
  styleUrls: ['./homepagegoaldisplay.component.css'],
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
export class HomepagegoaldisplayComponent implements OnInit {

  userGoals: any;
  userGoalNowToEndTime: any[] = [0]
  userGoalStartToEndTime: any[] = [0]
  resourceIndex: any;
  startEndDiff: any;
  currentTimeDiff :any;
  currentTime :any;
  startGoalDate :any;
  endGoalDate :any;

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) { }

  ngOnInit() {

    this.data.currentGoals.subscribe((res) =>{
       console.log("Here is the User Goal Information! ")
       console.log(res)
       this.userGoals = res
       var tick;

       this.startEndDiff = 0;
       this.currentTimeDiff = 0;
       this.currentTime = moment();
       this.startGoalDate = new Date;
       this.endGoalDate = new Date;

       for(tick in this.userGoals){
         console.log(tick);
         this.startGoalDate = moment(this.userGoals[tick].goalCreationDate)
         console.log("Start: " + this.startGoalDate);
         this.endGoalDate = moment(this.userGoals[tick].goalDueDate)
         console.log("End: " + this.endGoalDate);
         this.startEndDiff = this.endGoalDate.diff(this.startGoalDate, 'hours');
         console.log("Difference of Days: " + this.startEndDiff);

         this.currentTimeDiff = this.endGoalDate.diff(this.currentTime, 'hours');

         if(this.userGoalNowToEndTime[0]===undefined && this.userGoalStartToEndTime[0]===undefined ){
           console.log("Define me!")
            this.userGoalNowToEndTime[0] = this.currentTimeDiff;
            this.userGoalStartToEndTime[0] = this.startEndDiff;
            //console.log(this.userGoalNowToEndTime)
            //console.log(this.userGoalStartToEndTime)

            continue;
         }

         if(this.userGoalNowToEndTime!==undefined && this.userGoalStartToEndTime!==undefined){
           console.log("Hello")
            this.userGoalNowToEndTime = this.userGoalNowToEndTime.concat(this.currentTimeDiff);
            this.userGoalStartToEndTime = this.userGoalStartToEndTime.concat(this.startEndDiff);
            //console.log(this.userGoalNowToEndTime)
            //console.log(this.userGoalStartToEndTime)


         }


       }

        console.log(this.userGoalStartToEndTime);
        console.log(this.userGoalNowToEndTime);


    })
  }

  sendToGoals(resourceIndex){
    console.log("Meet Your Goal");
    console.log(resourceIndex);
    //this.resourceIndex = resourceIndex;
    this.data.goalHubSend(resourceIndex);
    this.router.navigateByUrl('goalHome/goalHub');

  }



}
