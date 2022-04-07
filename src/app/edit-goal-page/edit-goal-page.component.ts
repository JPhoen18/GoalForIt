import { Component, OnInit, ViewChild, ChangeDetectionStrategy  } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-goal-page',
  templateUrl: './edit-goal-page.component.html',
  styleUrls: ['./edit-goal-page.component.css']
})
export class EditGoalPageComponent implements OnInit {
  userID: any
  userAccount: any
  goalIndex: any
  goalNeeded: any
  userGoals: any
  goalTitle: any
  description: any
  goalCreationDate: any
  newGoalCreationDate: any
  goalDueDate: any
  emailID: any;

  otherResService: any
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
          this.emailID = this.userAccount.email;

        //  this.goalcount = this.userGoals.length;

          this.otherResService = this.resourceservice;
          this.data.currentHomeGoalRes.subscribe((res) =>{
            console.log("In the Goal Hub Now");
            console.log(res);
            this.goalIndex = res;
            if(this.goalIndex==undefined){
              this.goalIndex = this.otherResService.getGoalIndexMarker();
            };
            this.goalNeeded = this.userGoals[this.goalIndex];
            console.log(this.goalNeeded);
            this.goalTitle = this.goalNeeded.goalTitle;
            this.description = this.goalNeeded.description;
            this.goalCreationDate = this.goalNeeded.goalCreationDate;
            //this.goalCreationDate = new Date(this.goalCreationDate).toDateString();
            this.goalDueDate = this.goalNeeded.goalDueDate;
          //  this.goalDueDate = new Date(this.goalDueDate).toDateString();

          // 2/8/21 -- fix this with the correct variable names




        })
      })

    }

    onSave(){
      console.log(this.goalTitle);
      console.log(this.description);
      console.log(new Date(this.goalCreationDate));
      console.log(new Date(this.goalDueDate));

      this.goalNeeded.goalTitle = this.goalTitle;
      this.goalNeeded.description = this.description;
      this.goalNeeded.goalCreationDate = this.goalCreationDate;
      this.goalNeeded.goalDueDate = this.goalDueDate;

      console.log(this.goalNeeded);
      //Pass the edited goal to the service
      this.resourceservice.editGoal(this.goalNeeded, this.goalIndex, this.emailID);

    }


}
