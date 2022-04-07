import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import {HighPriorityList} from '../highprioritylist.model';
import {MediumPriorityList} from '../mediumprioritylist.model';
import {LowPriorityList} from '../lowprioritylist.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-goal-form',
  templateUrl: './second-goal-form.component.html',
  styleUrls: ['./second-goal-form.component.css']
})
export class SecondGoalFormComponent implements OnInit {
  message: string
  //subValues: number
  public littlegoals : any = {
       subValues: 0
  };
  public decisionmodel : any = {
  resourceYN: Boolean,
};
  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService) { }

  ngOnInit() {
  }
  checker(){
    this.message = "Second Goal Form Component"
    console.log(this.message)
  }
  onSubmit(){ //second onsubmit called by the formparent
    this.resourceservice.deleteSecondarySubgoalCopy();
    this.resourceservice.deleteCurrentSubgoalArray();
    this.data.deleteBackupSubgoalCount();

    if(this.decisionmodel.resourceYN==1){
    this.littlegoals.subValues = 1000;
    console.log("SubGoal Numbers")
    console.log(this.littlegoals.subValues)
    this.data.passSubGoalCount(this.littlegoals.subValues)
    this.data.passBackupSubGoalCount(this.littlegoals.subValues) //session storage option
    this.resourceservice.passSubGoalHolder(this.littlegoals.subValues);
  }
  if(this.decisionmodel.resourceYN==2){
    console.log("SubGoal Numbers")
    console.log(this.littlegoals.subValues)
    this.data.passSubGoalCount(this.littlegoals.subValues)
    this.data.passBackupSubGoalCount(this.littlegoals.subValues) //session storage option
    this.resourceservice.passSubGoalHolder(this.littlegoals.subValues);
  }
    //this.subValues = sub.form.value;
    //console.log(this.subValues)
  }

  onDecisionChange(decision){
    this.decisionmodel.resourceYN=decision
    console.log(decision)
  }


}
