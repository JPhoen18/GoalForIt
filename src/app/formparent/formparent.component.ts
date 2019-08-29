import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {FirstGoalFormComponent} from '../first-goal-form/first-goal-form.component';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-formparent',
  templateUrl: './formparent.component.html',
  styleUrls: ['./formparent.component.css']
})
export class FormparentComponent implements AfterViewInit  {

  goalArray : any[] //Change to be specific to a Goal
  subgoalarray: any[]  //Leave type as is for now 4/23/19
  subGoalNum: number
  initiate: boolean = false
  res: any[]
  subgoalcopy: any[]
  subComponentName: any
  //observe: any //use to control subscribe function
  //curUserObj: DataService

  //@ViewChild(FirstGoalFormComponent)
  //private firstgoalformcomponent : FirstGoalFormComponent;

  goalformcomponent : any  //will reference and store any form component
  subgoalportion: any
  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService, private http : Http,  private route: ActivatedRoute){}


//  private firstgoalformcomponent : FirstGoalFormComponent
  ngAfterViewInit() {}
  setChild(childsection){ //For every child component that comes into view, we use this function to call child functions.
    this.goalformcomponent = childsection;
  //  this.goalformcomponent.checker()
    console.log(childsection.constructor.name);
    this.subComponentName = childsection.constructor.name;
    console.log(this.subComponentName);
    console.log(typeof(this.subComponentName));

  }




  onContinueClick(){
    if(this.goalArray){
    console.log(this.goalArray.length)
    while(this.goalArray.length>0){
      this.goalArray.shift()
    }}

    if(this.subgoalarray){
    console.log(this.subgoalarray.length)
    while(this.subgoalarray.length>0){
      this.subgoalarray.shift()
      console.log(this.subgoalarray)
    }}
    this.subGoalNum = -1


    this.goalformcomponent.onSubmit()  //Retrieves the main goal from first-goal-form.
    this.data.currentUserObjModel.subscribe((res) =>{
      // console.log("Here is the Goal So Far!!")
       this.goalArray = res // Storing the initial goal
       console.log(this.goalArray)
       this.router.navigateByUrl('goalCreation/secondportion')
       //" routerLink="secondportion" [class.activated]=" currentUrl == 'goalCreation/secondportion'
  })
  console.log("I was clicked...should I be?")

}

onSubGoalClick(){ //This only activates for the second time after the first subgoal is submitted
   //console.log("Here is the subgoal part")


   if(this.subGoalNum==-1){
      this.goalformcomponent.onSubmit() //function submits the goal values
   }
  // ** First retrieves the number of subgoals, then it retrieves the subgoals subsequently**

   if(this.initiate==false){  //this.subGoalNum == 0 &&

   this.data.currentSubGoalNum.subscribe((res) =>{
     console.log("Here is the number of subgoals that are required.")
     console.log(res)  //The number of goals that are required.
     this.subGoalNum = res // Storing the amount of subgoals
     this.initiate = true
     //this.subGoalNum = this.subGoalNum - 1


   })
 return; } //previous if statement retrieves the Sub Goal number from the service.

 //possibly where I should call the subgoalportion.component's method to display the previous subgoal title
 //this.goalformcomponent.groupSubGoal() //8/10/19
   console.log("Running around")
   if(this.subGoalNum>0){
     console.log("Running inside functionS")
    this.goalformcomponent.onrequest()//This submits the sub goal again //This seems to be an issue.  Not getting a value from correct template for
    // sub object, So the service sends me the previous value.   Use unique names for these sort of component calls
    this.data.currentSubUserObj.subscribe((res)=> {

      console.log("My checker")

        console.log("Here is the subgoal: "+this.subGoalNum)
        console.log(res)
        this.res = res
        //this.goalformcomponent.onclear()
      })
        console.log(typeof this.res[0][0])
        if(typeof this.res[0][0]=== 'string'){
             console.log(this.subgoalarray)
            if(this.subgoalarray===undefined){
                  this.subgoalarray = this.res
                  console.log(this.subgoalarray)
                  }
            else if(this.subgoalarray!==undefined){
              for(var i=0; i<this.subgoalarray.length; i++){ //Removing the duplicates for the goal entries
                if(this.subgoalarray[i][0]==this.res[0][0]){
                    this.subgoalarray.splice(i,1)
                  }
                }

                this.subgoalarray = this.subgoalarray.concat(this.res)//Why is it duplicating subgoals
                console.log(this.subgoalarray.length)


              }
        this.subGoalNum = this.subGoalNum - 1
        this.goalformcomponent.onclear()

      }

      else if(typeof this.res[0][0]!= "string") {
        return;
        //console.log("There is no data yet! ")
      }


  //   console.log("You Have "+this.subGoalNum+" subgoals left.")
   }
   if(this.subGoalNum<=0){
     console.log("You are all done with your subgoal entries!")
     this.initiate=false
     console.log(this.goalArray)
     console.log(this.subgoalarray)
     this.data.passFinalGoal(this.goalArray);
     this.data.passFinalSubGoal(this.subgoalarray);
     this.subgoalcopy = this.subgoalarray
     this.subGoalNum = -1
     this.goalformcomponent.onclear()
     //5/1/19 -- This component finally works to get the goals and subgoals along with dates and times.
     this.router.navigateByUrl('resourcedecision')

   }


}

   onHaltGoalClick(){
     // Call onrequest(), get the final sub-goal passed
     var subGoalFinal;
     this.goalformcomponent.onrequest()
     // subscribe to this.data.currentSubUserObj.subscribe -- to get the final sub goal.
     this.data.currentSubUserObj.subscribe((res)=> {

       console.log("My checker")

         console.log("Here is the subgoal: "+this.subGoalNum)
         console.log(res)
         subGoalFinal = res
         //this.goalformcomponent.onclear()
       })
     //Append sub-goal to the subgoal array this.subgoalarray
     if(this.subgoalarray!==undefined)
     {
     this.subgoalarray = this.subgoalarray.concat(subGoalFinal);
      }

      if(this.subgoalarray === undefined)
      {
        this.subgoalarray = subGoalFinal;
      }

     console.log("You are all done with your multiple subgoal entries!")
     this.initiate=false
     console.log(this.goalArray)
     console.log(this.subgoalarray)
     this.data.passFinalGoal(this.goalArray);
     this.data.passFinalSubGoal(this.subgoalarray);
     //pass goal to sessionStorage 8/21/19
     this.data.setCurrentGoals(this.goalArray);
     //pass subgoal to sessionstorage
     this.data.setCurrentSubGoals(this.subgoalarray);

     this.subgoalcopy = this.subgoalarray
     this.subGoalNum = -1
     this.goalformcomponent.onclear()
     //5/1/19 -- This component finally works to get the goals and subgoals along with dates and times.
     this.router.navigateByUrl('resourcedecision')
   }



}
