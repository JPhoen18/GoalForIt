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
  selector: 'app-sub-to-do-list',
  templateUrl: './sub-to-do-list.component.html',
  styleUrls: ['./sub-to-do-list.component.css']
})
export class SubToDoListComponent implements OnInit {
  toDoListArray: any[][] //keeps a dynamic list of the todo items
  subGoalArray: any[] //stores the subgoals
  currentSubGoal: any
  itemTitle: String
  loggedUser: any
  userID: any
  userGoals: any
  firstName: any
  lastName: any
  emailID: any
  goalIndex: any
  goalNeeded: any
  userAccount: any

  booleanTracker: any[]

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) { }

  ngOnInit() {
    //we need the user subgoal array
    this.data.currentGoals.subscribe((res) =>{
       console.log("Here is the User SubGoals Information!")
       console.log(res)
       this.subGoalArray = res

    })

    //we need the particular subgoal
    this.data.currentSubGoalSolo.subscribe((res) =>{
        var tick;
        var boollength;
        console.log("Here is the SubGoal")
        console.log(res);
        this.currentSubGoal = res;


        if(this.currentSubGoal[5]){
          console.log(this.currentSubGoal[5]);
          this.toDoListArray = this.currentSubGoal[5];

          for(tick in this.toDoListArray){

            if(this.booleanTracker===undefined){
              this.booleanTracker = [0];
              this.booleanTracker[0] = this.toDoListArray[tick][1];
              console.log(this.booleanTracker);
            }
            else if(this.booleanTracker!==undefined){
              this.booleanTracker = this.booleanTracker.concat(this.toDoListArray[tick][1]);
              console.log(this.booleanTracker);

            }

          }
        }


    })

    this.data.loggedInUser.subscribe((res) =>{ //need the logged in user's email
    console.log(res);
            this.loggedUser = res;

  })

  this.userID = this.resourceservice
        .getUserSession();
        console.log(this.userID);

    this.resourceservice
      .getUser(this.userID)
      .subscribe((data: any)=>{
        this.userAccount = data;
        console.log("Here I am!")
        console.log(this.userAccount)
        this.userGoals = this.userAccount.goals;
        this.firstName = this.userAccount.firstname;
        this.lastName = this.userAccount.lastname;
        this.emailID = this.userAccount.email;
      //  this.goalcount = this.userGoals.length;


        this.data.currentHomeGoalRes.subscribe((res) =>{
          console.log("In the Goal Hub Now");
          console.log(res);
          this.goalIndex = res;
          this.goalNeeded = this.userGoals[this.goalIndex]; //I need this variable to reconstruct the goal and send it to the service

        })

      })

  }


  addItem(){ //this works
    var arrlength;
    console.log(this.itemTitle);
    if(this.toDoListArray===undefined){
      this.toDoListArray = [[0]];
      this.toDoListArray[0] = [this.itemTitle, false];
      this.itemTitle='';
      return;
    }
    if(this.toDoListArray!==undefined){
        arrlength = this.toDoListArray.length;
        this.toDoListArray = this.toDoListArray.concat([0]);
        this.toDoListArray[arrlength] = [this.itemTitle, false];
        console.log(this.toDoListArray);

    }
    this.itemTitle='';
  }



  onDelete(item){ //this works
    var ind;
      console.log(item);
      for(ind in this.toDoListArray){
        if(this.toDoListArray[ind][0]=== item[0]){
          console.log(this.toDoListArray[ind][0]);
          this.toDoListArray.splice(ind, 1);
        }
      }

    console.log(this.toDoListArray);
  }



  onChecked(item){
    var idx;
    console.log(item);
      for(idx in this.toDoListArray){
        if(this.toDoListArray[idx][0]=== item[0]){
            if(this.toDoListArray[idx][1]===false){
                this.toDoListArray[idx][1] = true;
                console.log(this.toDoListArray[idx][1]);
                console.log(this.toDoListArray);

                return
              }
            if(this.toDoListArray[idx][1]===true){
                this.toDoListArray[idx][1] = false;
                console.log(this.toDoListArray[idx][1]);

              }
            }
        }

      console.log(this.toDoListArray);
  }

  onSave(){
      var saveindx;
      console.log(this.toDoListArray);
      if(this.currentSubGoal[5]!==undefined){
        this.currentSubGoal[5] = this.toDoListArray;
      }
      if(this.currentSubGoal[5]===undefined){
          this.currentSubGoal = this.currentSubGoal.concat([this.toDoListArray]);
        }

      console.log(this.currentSubGoal);
      for(saveindx in this.subGoalArray){
          if(this.subGoalArray[saveindx][0]===this.currentSubGoal[0] && ////
                  this.subGoalArray[saveindx][1]===this.currentSubGoal[1]){
                  this.subGoalArray[saveindx] = this.currentSubGoal;
                  console.log(this.subGoalArray);
                  break;
          }
      }
      console.log("Broke the for-if");
      this.goalNeeded.goalSubGoal = this.subGoalArray;
      this.data.passSubGoalToDisplay(this.subGoalArray);
      console.log("New goal")
      console.log(this.goalNeeded);
      this.resourceservice.sendNewGoalSubGoal(this.goalNeeded, this.goalIndex, this.emailID);

  }


}
