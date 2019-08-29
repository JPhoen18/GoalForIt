import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {FirstGoalFormComponent} from '../first-goal-form/first-goal-form.component';
import {Goals} from '../goals.model';
import {HighPriorityList} from '../highprioritylist.model';
import {MediumPriorityList} from '../mediumprioritylist.model';
import {LowPriorityList} from '../lowprioritylist.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-addresourcedecision',
  templateUrl: './addresourcedecision.component.html',
  styleUrls: ['./addresourcedecision.component.css']
})
export class AddresourcedecisionComponent implements OnInit {

  public decisionmodel : any = {
  resourceYN: Boolean,
}

  public goaltitleinfo : any
  loggedUser: any
  finalGoal: any
  finalSubGoal: any
  highpriority: any[]
  mediumpriority: any[]
  lowpriority: any[]


  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService, private http : Http) { }

  ngOnInit() {
  }

  onDecisionChange(decision){
    this.decisionmodel.resourceYN=decision
    console.log(decision)
  }

  onSubmit(){
  console.log(this.decisionmodel.resourceYN);
  if(this.decisionmodel.resourceYN===1){

      this.data.currentUserObjModel.subscribe((res) =>{
        console.log(res);
         this.goaltitleinfo = res[0];
         console.log("goal title info");
         console.log(this.goaltitleinfo[0]);
      //   try{
      //   this.resourceservice.sendTitleForWebResource(this.goaltitleinfo[0])
       //}
      // catch(err){
    //     console.log(err);
    //   }

       try{
         this.resourceservice.sendTitleForRedResource(this.goaltitleinfo[0]);
       }
       catch(err){
         console.log(err);
       }

       try{
         this.resourceservice.sendTitleForVidResource(this.goaltitleinfo[0]);
       }
       catch(err){
         console.log(err);
       }

       try{
         this.resourceservice.sendTitleForWebResource(this.goaltitleinfo[0]);
       }
       catch(err){
         console.log(err);
       }

         //this.resourceservice.sendTitleForVidResource(this.goaltitleinfo[0]);
         this.data.passGoalTitle(this.goaltitleinfo[0]);
         this.router.navigateByUrl('resourcePage');
    })
  }

  if(this.decisionmodel.resourceYN===2){
    this.loggedUser = this.data.getUserAppWide()
    console.log(this.loggedUser);
    this.highpriority = [0];
    this.mediumpriority = [0];
    this.lowpriority = [0];

    this.data.currentfinalGoal.subscribe((res) =>{
      console.log(res);
            this.finalGoal = res;
            if(this.finalGoal===undefined){
              this.finalGoal = this.data.getCurrentGoals();
              console.log(this.finalGoal);
            }
            //console.log("In resource service");
            //console.log(res);
            //console.log(this.finalGoal);
    })


    this.data.currentfinalSubGoal.subscribe((res) =>{
      console.log(res);
      this.finalSubGoal = res;
      console.log(this.finalSubGoal);
      if(this.finalSubGoal===undefined){
        this.finalSubGoal = this.data.getCurrentSubGoals();
        console.log(this.finalGoal);
      }
      this.resourceservice.insertNewUserGoal(this.finalGoal, this.finalSubGoal, this.highpriority, this.mediumpriority, this.lowpriority, this.loggedUser);
      this.router.navigateByUrl('/goalHome');

    })
  }

}
}
