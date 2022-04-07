import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import * as moment from 'moment';

@Component({
  selector: 'app-subgoaldisplaypage',
  templateUrl: './subgoaldisplaypage.component.html',
  styleUrls: ['./subgoaldisplaypage.component.css']
})
export class SubgoaldisplaypageComponent implements OnInit {

  subgoaltitle: any
  dueDate: any
  description: any
  subGoalGroup: any

  subGoalIndex: any
  userGoals: any
  emailID: any
  userAccount: any
  subGoalArray: any
  goalIndex: any
  userID: any
  trueFalseCount: any[]

  //graphics for percent wheel
  percent:any
  radius:any
  outerStrokeWidth:any
  innerStrokeWidth:any
  outerStrokeColor:any
  innerStrokeColor:any
  animation:any
  animationDuration:any

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) { }

  ngOnInit() {

    this.userID = this.resourceservice
          .getUserSession();
          console.log(this.userID);

    var extraData = this.data;

    this.data.currentSubGoalSolo.subscribe((res) =>{
            var tfcount;
            var percent = 0;
            var tTrue = 0;
            var fFalse = 0;

            console.log("The resulting subgoal");
            console.log(res);
            if(res==undefined){
              res = extraData.getSubGoalFromSession();
              console.log("Had to, there was no subgoal");
              console.log(res);
            }
            this.subgoaltitle = res[0];
            this.description = res[1];
            this.dueDate = res[3];
            this.subGoalGroup = res[4];

            if(res[5]!==undefined){
              this.trueFalseCount = res[5];
              console.log(this.trueFalseCount);

              for(tfcount in this.trueFalseCount){
                if(this.trueFalseCount[tfcount][1]===true){
                  tTrue = tTrue + 1;
                }
                if(this.trueFalseCount[tfcount][1]===false){
                  fFalse = fFalse + 1;
                }

              }
              console.log(tTrue);
              console.log(fFalse);
              percent = (tTrue / (tTrue + fFalse)) * 100;
              console.log(percent);

              this.percent = percent;
              console.log("Percent is: " + this.percent);


            }


    })

    this.data.currentSubGoalSoloIndex.subscribe((res) =>{
            console.log("SubGoal Index")
            console.log(res);
            this.subGoalIndex = res;
            if(this.subGoalIndex==undefined){
              this.subGoalIndex = extraData.getSubGoalIndexFromSessions();
            }
    })

    this.data.currentHomeGoalRes.subscribe((res) =>{
      console.log("Goal Index");
      console.log(res);
      this.goalIndex = res;
    })

            this.resourceservice
              .getUser(this.userID)
              .subscribe((data: any)=>{
                this.userAccount = data;
                console.log("Here I am!")
                console.log(this.userAccount)
                this.emailID = this.userAccount.email;
      })


      this.data.currentSubGoalDisplay.subscribe((res) =>{
       this.subGoalArray = res;
        console.log(this.subGoalArray);

    })



  }

  deleteSubGoal(){  //Need email, goal index, and new subgoal array
      this.subGoalArray.splice(this.subGoalIndex, 1)
      console.log(this.subGoalArray);
      this.resourceservice.deleteSubGoal(this.subGoalArray, this.goalIndex, this.emailID)

  }

}
