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
  selector: 'app-singlegoalhub',
  templateUrl: './singlegoalhub.component.html',
  styleUrls: ['./singlegoalhub.component.css']
})
export class SinglegoalhubComponent implements OnInit {

  userID: any; //This will be set in the future when the user logs in
  firstName: any;
  lastName: any;
  emailID: any;
  sessionUser: any;
  userAccount: UserAccount;
  userGoals: any;
  showUserGoals: any;
  showUserResources: any;
  showGoalSchedule: any;
  subgoalcount: any;

  goalIndex: any;
  goalNeeded: any;
  goalTimer: any;
  subGoalSend: any;


  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService) { }

    ngOnInit() {
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
            console.log(this.userGoals);
            this.firstName = this.userAccount.firstname;
            this.lastName = this.userAccount.lastname;
            this.emailID = this.userAccount.email;
          //  this.goalcount = this.userGoals.length;


            this.data.currentHomeGoalRes.subscribe((res) =>{
              console.log("In the Goal Hub Now");
              console.log(res);
              this.goalIndex = res;
              this.goalNeeded = this.userGoals[this.goalIndex];
              console.log(this.goalNeeded);
              this.subGoalSend = this.goalNeeded.goalSubGoal
              this.subgoalcount = this.subGoalSend.length
              this.data.passResourcePackage([this.goalIndex, this.goalNeeded, this.emailID]);
              this.data.passUser(this.subGoalSend);
              this.data.passSeparateUser(this.userGoals);
              this.data.displaySubGoalPage(this.subGoalSend);
              this.goalTimer = moment(this.goalNeeded.goalDueDate).fromNow();
              console.log(this.goalTimer)
            })

          })



    }

    showGoals(){
        this.showUserGoals = true;
        this.showUserResources = false;
        this.showGoalSchedule = false;
    }

    showResources(){
      this.showUserResources = true;
      this.showUserGoals = false;
      this.showGoalSchedule = false;

    }

    showTimeLine(){
      this.showGoalSchedule = true;
      this.showUserResources = false;
      this.showUserGoals = false;

    }
    goalEdit(){
      this.router.navigateByUrl('editGoal');
    }

    goalDelete(){
      this.userGoals.splice(this.goalIndex, 1);
      console.log("Checkt the user Goals")
      console.log(this.userGoals);
      this.resourceservice.deleteGoal(this.userGoals, this.goalIndex, this.emailID);
      this.router.navigateByUrl('/goalHome');


    }

}
