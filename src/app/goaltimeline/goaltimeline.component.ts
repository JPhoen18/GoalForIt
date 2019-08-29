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
  selector: 'app-goaltimeline',
  templateUrl: './goaltimeline.component.html',
  styleUrls: ['./goaltimeline.component.css'],
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

export class GoaltimelineComponent implements OnInit {

  userGoals: any;
  resourceIndex: any;
  displaySubGoalTree: any[][];
  subGoalStartEnd: any[][];  //contains the number of days each subgoal possesses.
  subGoalNowToEnd: any[][];  //contains the duration from current time to subgoal due date for each sub goal
  startGoalDate: any;  //start date for every sub goal
  endGoalDate: any; //end date for every sub goal
  startEndDiff:  any; //time duration for a sub goal
  currentTimeDiff: any;
  currentTime: any; //moment() or current time when the user loads the timeline component
  finalGoalDisplay: any;
  control: number;
  ycount: number

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) { }

  ngOnInit() {
    this.data.currentGoals.subscribe((res) =>{
       console.log("Here is the User Goal Information! ")
       console.log(res)
       this.userGoals = res
      this.callGoalTree()
      this.finalGoalDisplay = this.displaySubGoalTree
      console.log(this.finalGoalDisplay[0][0])
    })
  }


    callGoalTree(){
      var xcount;
      this.ycount = 0;
      this.control = 0;
      this.startEndDiff = 0;
      this.currentTimeDiff = 0;
      this.currentTime = moment();
      console.log(this.currentTime);
      this.startGoalDate = new Date;
      this.endGoalDate = new Date;
      this.displaySubGoalTree = [[0]];
      this.subGoalStartEnd = [[0]];
      this.subGoalNowToEnd = [[0]];
               for(xcount in this.userGoals) {
                  if(this.userGoals[xcount][4]==this.control){
                        console.log("Xcount = control!")
                        if(this.displaySubGoalTree[0][0]!==0){
                              console.log("No display here")
                              this.displaySubGoalTree[this.control][this.ycount] = this.userGoals[xcount]
                              //this.ycount = this.ycount + 1
                              console.log(this.displaySubGoalTree)

                              // Work on the subGoalStartEnd Array
                              this.startGoalDate = moment(this.userGoals[xcount][2])
                              console.log("Start: " + this.startGoalDate);
                              this.endGoalDate = moment(this.userGoals[xcount][3])
                              console.log("End: " + this.endGoalDate);
                              this.startEndDiff = this.endGoalDate.diff(this.startGoalDate, 'hours');
                              console.log("Difference of Days: " + this.startEndDiff);
                              this.subGoalStartEnd[this.control][this.ycount] = this.startEndDiff;
                              console.log(this.subGoalStartEnd)


                              //Work on the subGoalNowToEnd Array
                              this.currentTimeDiff = this.endGoalDate.diff(this.currentTime, 'hours');
                              this.subGoalNowToEnd[this.control][this.ycount] = this.currentTimeDiff;
                              console.log(this.subGoalNowToEnd)


                              this.ycount = this.ycount + 1



                              }
                        else if(this.displaySubGoalTree[0][0]===0){
                              this.displaySubGoalTree[this.control][this.ycount]= this.userGoals[xcount]
                              console.log(this.displaySubGoalTree)

                              // Work on the subGoalStartEnd Array
                              this.startGoalDate = moment(this.userGoals[xcount][2])
                              console.log("Start: " + this.startGoalDate);
                              this.endGoalDate = moment(this.userGoals[xcount][3])
                              console.log("End: " + this.endGoalDate);
                              this.startEndDiff = this.endGoalDate.diff(this.startGoalDate, 'hours');
                              console.log("Difference of Days: " + this.startEndDiff);
                              this.subGoalStartEnd[this.control][this.ycount] = this.startEndDiff;
                              console.log(this.subGoalStartEnd)


                              //Work on the subGoalNowToEnd Array
                              this.currentTimeDiff = this.endGoalDate.diff(this.currentTime, 'hours');
                              this.subGoalNowToEnd[this.control][this.ycount] = this.currentTimeDiff;
                              console.log(this.subGoalNowToEnd)


                              this.ycount = this.ycount + 1

                              }


                        }

                  else if(this.userGoals[xcount][4]!=this.control){
                    this.control = this.control+1;
                    this.ycount = 0
                    this.displaySubGoalTree = this.displaySubGoalTree.concat([[0]])
                    this.subGoalStartEnd = this.subGoalStartEnd.concat([[0]])
                    this.subGoalNowToEnd = this.subGoalNowToEnd.concat([[0]])

                    console.log(this.displaySubGoalTree)


                    this.displaySubGoalTree[this.control][this.ycount] = this.userGoals[xcount]

                    this.startGoalDate = moment(this.userGoals[xcount][2])
                    console.log("Start: " + this.startGoalDate);
                    this.endGoalDate = moment(this.userGoals[xcount][3])
                    console.log("End: " + this.endGoalDate);
                    this.startEndDiff = this.endGoalDate.diff(this.startGoalDate, 'hours');
                    console.log("Difference of Days: " + this.startEndDiff);
                    this.subGoalStartEnd[this.control][this.ycount] = this.startEndDiff;


                    this.currentTimeDiff = this.endGoalDate.diff(this.currentTime, 'hours');
                    this.subGoalNowToEnd[this.control][this.ycount] = this.currentTimeDiff;

                    console.log(this.subGoalStartEnd);
                    console.log(this.subGoalNowToEnd);
                    //this.displaySubGoalTree[this.control][this.ycount] = this.userGoals[xcount]
                  }

                }
            console.log("This is the sub goal tree")
            console.log(this.displaySubGoalTree)
            console.log("This is the Start End tree")
            console.log(this.subGoalStartEnd);
            console.log("This is the Now to End tree")
            console.log(this.subGoalNowToEnd);


              }

          fullSubGoalPage(subvalue){
            var x;
            var subgoalindex;

            for(x in this.userGoals){
              if(this.userGoals[x][0]===subvalue[0] && this.userGoals[x][1]===subvalue[1]
                  && this.userGoals[x][2]===subvalue[2] && this.userGoals[x][3]===subvalue[3] && this.userGoals[x][4]===subvalue[4])
                  {
                      subgoalindex = x;
                      console.log(subgoalindex);
                      break;
                  }
            }

            console.log("Broke the loop!")
            console.log("Send the sub goal!");
            console.log(subvalue);
            try{
            this.data.passSubGoalToDisplay(subvalue);}
            catch(err){
              console.log(err);
            }
            console.log("Send the subgoal index!")
            this.data.passSubGoalDisplayIndex(subgoalindex);
            this.router.navigateByUrl('goalHub/subGoalDisplay');

          }


            }




    //var xcount = 0;
    //var ycount = 0;

  //    }//end of ngOnInit
//    }//end of class definition
