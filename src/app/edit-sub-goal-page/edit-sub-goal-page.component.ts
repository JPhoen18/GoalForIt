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
  selector: 'app-edit-sub-goal-page',
  templateUrl: './edit-sub-goal-page.component.html',
  styleUrls: ['./edit-sub-goal-page.component.css']
})
export class EditSubGoalPageComponent implements OnInit {

  userID: any
  userAccount: any
  subgoalTitle: any
  subdescription: any
  subgoalCreationDate: any
  subgoalDueDate: any
  userGoalArray: any
  userSubGoal: any
  userSubGoalArray: any
  emailID: any

  subGoalIndex: any
  goalIndex: any

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) { }

  ngOnInit() {
    //Come back and fix this possibly
    this.userID = this.resourceservice
          .getUserSession();
          console.log(this.userID);

      this.resourceservice
        .getUser(this.userID)
        .subscribe((data: any)=>{
          this.userAccount = data;
          console.log("Here I am!")
          console.log(this.userAccount)
          this.userGoalArray = this.userAccount.goals;
          console.log(this.userGoalArray);
          this.emailID = this.userAccount.email;
 //I am passing the user information to the resource & homepagedisplay components.
        })
//currentSeparateGoals -- use to subscribe and receive a separate userGoals Array
        var spareData = this.data;
        var spareResourceUser = this.resourceservice;
        this.data.currentSubGoalSolo.subscribe((res) =>{
                console.log("The resulting sub goal");
                console.log(res);
                this.userSubGoal = res;
                if(this.userSubGoal==undefined){
                  this.userSubGoal = spareData.getSubGoalFromSession();
                }
                this.subgoalTitle = this.userSubGoal[0];
                this.subdescription = this.userSubGoal[1];
                this.subgoalCreationDate = this.userSubGoal[2];
                console.log(this.subgoalCreationDate)
                console.log(typeof(this.subgoalCreationDate))
                this.subgoalDueDate = this.userSubGoal[3];
        })

        this.data.currentSubGoalSoloIndex.subscribe((res) =>{
                console.log("The resulting sub goal index ")
                console.log(res);
                this.subGoalIndex = res;
                if(this.subGoalIndex==undefined){
                  this.subGoalIndex = spareData.getSubGoalIndexFromSessions();
                  console.log(this.subGoalIndex);
                }
        })

        //change this to take variable from session storage for goal Index and userSubGoalArray
        this.data.currentGoals.subscribe((res) =>{
           console.log("Here is the User Sub Goal Information! ")
           console.log(res)
           this.userSubGoalArray = res;
           if(this.userSubGoalArray == undefined){
             this.userSubGoalArray = spareData.getSessionSubgoalInfo();
             console.log(this.userSubGoalArray);
           }

        })

        this.data.currentHomeGoalRes.subscribe((res) =>{
          console.log("The goal index is : "+res)
          this.goalIndex = res;
          if(this.goalIndex==undefined){
            this.goalIndex = spareResourceUser.getGoalIndexMarker();
            console.log(this.goalIndex);
          };
        })

  }


  onSubSave(){
    console.log(this.subgoalTitle)
    console.log(this.subdescription)//: any
    console.log(this.subgoalCreationDate)
    console.log(this.subgoalDueDate)

    this.userSubGoal[0] = this.subgoalTitle
    this.userSubGoal[1] = this.subdescription
    this.userSubGoal[2] = this.subgoalCreationDate
    this.userSubGoal[3] = this.subgoalDueDate
    console.log(this.userSubGoal)
    this.userSubGoalArray[this.subGoalIndex] = this.userSubGoal;
    //this.userGoalArray[this.goalIndex].goalSubGoal = this.userSubGoalArray;
    console.log(this.userSubGoalArray);
    this.resourceservice.sendSubGoalEdits(this.emailID, this.userSubGoalArray, this.goalIndex);
    this.data.passSubGoalToDisplay(this.userSubGoal); //this way, when I go back to subgoal page, edits will display automatically.
    this.data.passSubGoalToDisplayAsSession(this.userSubGoal); //this way, when I go back to subgoal page and even upon refresh, edits will display automatically
    //console.log(this.userGoalArray);

  }

}
