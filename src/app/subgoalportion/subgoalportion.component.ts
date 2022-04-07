import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {FirstGoalFormComponent} from '../first-goal-form/first-goal-form.component';
import { ActivatedRoute} from '@angular/router';
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
  selector: 'app-subgoalportion',
  templateUrl: './subgoalportion.component.html',
  styleUrls: ['./subgoalportion.component.css']
})
export class SubgoalportionComponent implements OnInit {

  message: string
  minDates: any
  maxDates: any
  subGoalGroup: any
  subGoalFinished: Boolean // User will check if they finished goal or not.
  subGoalProgress: any // 0-2, 0-- not started, 1 -- in progress
  subGoalGroupNum: any // used to save the subscription value
  subGoalArray: any[] //This is to track the subgoals separately, and for template display
  subGoalTitleTracker: any;//display the name of the previous title
  subCount: any = 0; //Keeps track of the subgoal's groups
  GroupNumber: number //number containing the sub-goal group the subgoal belongs to
  firstoption : null
  secondoption: null
  subGoalSubTier : any;
  //userObjArray: any

  public highpriorlist : HighPriorityList = {
    Title:'',
    AuthorURL: '',
    Content: ''
  }
  public medpriorlist : MediumPriorityList = {
    Title:'',
    AuthorURL: '',
    Content: ''
  }
  public lowpriorlist : LowPriorityList = {
    Title:'',
    AuthorURL: '',
    Content: ''
  }

  public goalModel : Goals = {
         goalTitle: '',
         description: '',
         goalCreationDate: new Date,
         goalDueDate: new Date,

         HighPriority: [this.highpriorlist],
         MediumPriority: [this.medpriorlist],
         LowPriority: [this.lowpriorlist]

  };

//  public decisionmodel : any = {
//  resourceYN: Number
//};

  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService, private route: ActivatedRoute){}


  ngOnInit() {
  //  this.decisionmodel.resourceYN = false;
  //  console.log(this.decisionmodel.resourceYN);
    this.data.currentUserObjModel.subscribe((res)=> {
      var tempRes;
    //  console.log("In the Subgoal Arena")
    //  console.log("Need the Goal Dates")
    //  console.log(res)
    //  console.log(res[0][2])
    //  console.log(res[0][3])
    var self = this
    if(res){
      this.minDates = res[0][2]
      this.maxDates = res[0][3]
    }
    if(res === undefined){
        tempRes = this.resourceservice.getFirstGoalInfo();
        console.log(tempRes);
        this.minDates = tempRes[0][2];
        this.maxDates = tempRes[0][3];
        console.log(this.minDates);
        console.log(this.maxDates);
        if(typeof(this.minDates) === 'string'){
          this.minDates = new Date(this.minDates);
          this.maxDates = new Date(this.maxDates);;
        }

    }
    })
    var alternateData = this.data;
    this.data.currentSubGoalNum.subscribe((res) =>{
      console.log("Subgoals to track the prev sub goals.")
      console.log(res)  //The number of goals that are required.
      this.subGoalGroupNum = res // Storing the amount of subgoals
      console.log(this.subGoalGroupNum);
      if(res === undefined){
       this.subGoalGroupNum = alternateData.getBackupSubgoalCount();
       console.log(this.subGoalGroupNum);
      }
      //this.subGoalNum = this.subGoalNum - 1
    })

    if(this.resourceservice.getSecondarySubgoalCopy() !== null){
        this.subGoalArray = this.resourceservice.getSecondarySubgoalCopy();
        console.log(this.subGoalArray);
        this.subGoalTitleTracker = this.subGoalArray[this.subGoalArray.length - 1][0];
        //here, set the this.subcount equal to the last subgoal's subgoal tier.  This way, there is no need for the subgoal tier to be saved in session storage.
        this.subCount = this.subGoalArray[this.subGoalArray.length - 1][4];
        console.log(this.subCount);
      //  this.decisionmodel.resourceYN = 1;

    }

  }


  checker(){
      this.message = "Sub Goal Form Component"
      console.log(this.message)
    }


//  groupSubGoal(){
//      if(this.subGoalArray!==undefined){
//        console.log(this.subGoalArray);
//        this.subGoalTitleTracker = this.subGoalArray[0][0];
//        console.log("Subgoal Title")
//        console.log(this.subGoalTitleTracker)
//      }
  //  }
  async checkForFields(){
    if(this.goalModel.goalTitle === "" || this.goalModel.description === ""){
      return false;
    };
  }


  async onrequest(){
    //console.log("Hello SubGoal X")

 var self = this
 console.log("Submit It")
 this.reset_filter()
 console.log(this.goalModel.goalTitle)
 console.log(this.goalModel.description)
 console.log(this.goalModel.goalCreationDate)
 console.log(this.goalModel.goalDueDate)

//console.log("Decision is: " + this.decisionmodel.resourceYN)

console.log("Check the subgoal contents");
console.log(this.subGoalArray);
console.log(this.subCount);
//console.log(this.decisionmodel.resourceYN);
 if(this.subGoalSubTier==1 && this.subGoalArray!==undefined){
      this.GroupNumber = this.subCount //Contains the sub group a sub-goal belongs to
      console.log(this.GroupNumber)
 }

 if(this.subGoalSubTier==2 && this.subGoalArray!==undefined){
      this.subCount = this.subCount + 1 //increments the sub group number so that subgoals that are not part of the subgroup will have a different value
      this.GroupNumber = this.subCount
      console.log(this.GroupNumber)

 }
 //This is where I make the subgoal
if(this.subGoalArray===undefined){
 var userObjArray = [[this.goalModel.goalTitle, this.goalModel.description, this.goalModel.goalCreationDate, this.goalModel.goalDueDate, this.GroupNumber=0]]
}
if(this.subGoalArray!==undefined){
  var userObjArray = [[this.goalModel.goalTitle, this.goalModel.description, this.goalModel.goalCreationDate, this.goalModel.goalDueDate, this.GroupNumber]]
}


 if(this.subGoalArray===undefined){
        this.subGoalArray = userObjArray;
        this.subGoalTitleTracker = this.subGoalArray[0][0];
        }
 else if(this.subGoalArray!==undefined){
        this.subGoalArray = this.subGoalArray.concat(userObjArray)
        this.subGoalTitleTracker = userObjArray[0][0]
        }

 console.log("I am keeping this goal for myself: ")
 console.log(this.subGoalArray)
 // save this subGoalArray in the case of page refreshing.  In session storage


 console.log("What Subgoal I am passing")
 console.log(userObjArray);
 await this.data.passSubUserObj(userObjArray);
 await this.resourceservice.passSecondarySubgoalCopy(this.subGoalArray);
//this.subGoalArray = this.resourceservice.getSecondarySubgoalCopy();


 //this.goalModel.goalTitle = ''
 //this.goalModel.description = ''
 //this.goalModel.goalCreationDate = new Date
 //this.goalModel.goalDueDate = new Date
 //console.log(this.goalModel)
  }
  onclear(bool){
    if(bool){
    window.location.reload();
  }
    console.log("Clear It")
    this.goalModel['goalTitle'] =''
    this.goalModel['description'] =''
    this.goalModel['goalCreationDate'] = new Date
    this.goalModel['goalDueDate'] = new Date

    //this.router.navigate(["../resourcedecision"], {relativeTo: this.route})

  }

  reset_filter() {
 this.firstoption = null;
 this.secondoption = null;
 console.log("Reset yeah")
}

  onDecisionChange(decision){
    //this.decisionmodel.resourceYN=decision
    console.log(decision)
    this.subGoalSubTier = decision; //use this in place of the decision model object, see if it helps
  }



}
