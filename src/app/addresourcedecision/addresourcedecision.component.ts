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
    console.log("We are here in addresourcedecision ngOnInit now");
  }

  onDecisionChange(decision){
    this.decisionmodel.resourceYN=decision
    console.log(decision)
  }

  async onSubmit(){
  console.log(this.decisionmodel.resourceYN);
  if(this.decisionmodel.resourceYN===1){
      //this method is still firing when this.data.passUserObj(userObjArray) is called in first-goal-form
      //cannot stop an observable from observing
      var anotherRes = this.resourceservice;
      await this.data.currentUserObjModel.subscribe(async (res) =>{
        var redoRes;
        console.log(res);
        if(res !== undefined){
         this.goaltitleinfo = res[0];
         console.log("goal title info");
         console.log(this.goaltitleinfo[0]);
       }

         if(res === undefined){
           redoRes = anotherRes.getFirstGoalInfo(); //session storage variable for the original goal
           this.goaltitleinfo = redoRes[0];
         }

         });



      try{
           await this.resourceservice
                .sendTitleForVidResource(this.goaltitleinfo[0]);
           }
      catch(err){
             console.log(err);
           }

      try{
           await this.resourceservice.sendTitleForWebResource(this.goaltitleinfo[0]);
           }
      catch(err){
             console.log(err);
           }

      try{
            await this.resourceservice.sendTitleForRedResource(this.goaltitleinfo[0]);
                }
      catch(err){
            console.log(err);
          }


             //this.resourceservice.sendTitleForVidResource(this.goaltitleinfo[0]);
           await this.data.passGoalTitle(this.goaltitleinfo[0]);
           console.log("addresourcedecision before resourcepage")
             //this.router.navigateByUrl('resourcePage');

           this.router.navigateByUrl('resourcePage');
  }

  if(this.decisionmodel.resourceYN===2){
    console.log("We are here now");
    this.loggedUser = this.data.getUserAppWide()
    console.log(this.loggedUser);
    this.highpriority = [0];
    this.mediumpriority = [0];
    this.lowpriority = [0];

    this.data.currentfinalGoal.subscribe((res) =>{
      console.log(res);
            this.finalGoal = res;
            if(this.finalGoal===undefined){
              this.finalGoal = this.data.getCurrentGoals(); //session storage for user goals
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
        this.finalSubGoal = this.data.getCurrentSubGoals(); //session storage for user subgoals
        console.log(this.finalGoal);
      }
      this.resourceservice.insertNewUserGoal(this.finalGoal, this.finalSubGoal, this.highpriority, this.mediumpriority, this.lowpriority, this.loggedUser);
      this.router.navigateByUrl('/goalHome');

    })
  }

}
}
