import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { HostListener } from "@angular/core";
import * as moment from 'moment';


@Component({
  selector: 'app-homepagegoaldisplay',
  templateUrl: './homepagegoaldisplay.component.html',
  styleUrls: ['./homepagegoaldisplay.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *',[
        query(':enter', //only defined elements being added, and where they are going from and to
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], {optional: true }),
        query( ':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
      })
    ])
  ])

  ]
})
export class HomepagegoaldisplayComponent implements OnInit {

  userGoals: any;
  userGoalNowToEndTime: any[];
  userGoalStartToEndTime: any[];
  resourceIndex: any;
  startEndDiff: any;
  currentTimeDiff :any;
  currentTime :any;
  startGoalDate :any;
  endGoalDate :any;
  tempGoalsArray :any;

  tempUserGoalNowToEnd :any;
  tempUserGoalStartToEnd :any;

  screenHeight: number;
  screenWidth: number;
  //this.userGoalNowToEndTime = this.userGoalNowToEndTime.concat(this.currentTimeDiff);
  //this.userGoalStartToEndTime = this.userGoalStartToEndTime.concat(this.startEndDiff);
//  goalDone: any;

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.screenHeight, this.screenWidth);


          //if(sideNav.style.visibility == 'visible'){
          //window.alert(this.screenWidth);
          //if width greater than 600.  Call method that will check if sidebar is visible. If so, adjust the css of the mother div.
      //    var firstSideNav = document.getElementById('menuholder');

      //    if(firstSideNav != null){
      //    window.alert(firstSideNav.style.position);
      //  }
    }

  ngOnInit() {

    this.data.currentGoals.subscribe((res) =>{
       console.log("Here is the User Goal Information! ")
       console.log(res)
       this.userGoals = res
       this.tempGoalsArray = this.userGoals.slice();

       for(var go in this.userGoals){
         this.userGoals[go].goalOrderNumber = go;
       }

       this.repaintGoalDisplay();
       this.tempUserGoalNowToEnd = this.userGoalNowToEndTime;
       this.tempUserGoalStartToEnd = this.userGoalStartToEndTime;

      // var tick;

    //   this.startEndDiff = 0;
    //   this.currentTimeDiff = 0;
    //   this.currentTime = moment();
    //   this.startGoalDate = new Date;
    //   this.endGoalDate = new Date;
    //   var goalDone;


    //   for(tick in this.userGoals){  //remember, this function's purpose is to create an iterable array for the homepagegoal displays.

    //     console.log(tick);
    //     this.userGoals[tick].goalOrderNumber = tick;
    //     this.startGoalDate = moment(this.userGoals[tick].goalCreationDate)
    //     console.log("Start: " + this.startGoalDate);
    //     this.endGoalDate = moment(this.userGoals[tick].goalDueDate)
    //     console.log("End: " + this.endGoalDate);
    //     this.startEndDiff = this.endGoalDate.diff(this.startGoalDate, 'hours');
    //     console.log("Difference of Hours: " + this.startEndDiff);

    //     this.currentTimeDiff = this.endGoalDate.diff(this.currentTime, 'hours');


    //     goalDone = this.userGoals[tick].finishedOrNot;
    //     console.log(goalDone);
    //     console.log(this.userGoals[tick].goalTitle);


    //     if(this.userGoalNowToEndTime[0]==='' && this.userGoalStartToEndTime[0]==='' ){
    //       console.log("Define me!")
    //        this.userGoalNowToEndTime[0] = this.currentTimeDiff;
    //        this.userGoalStartToEndTime[0] = this.startEndDiff;


    //        continue;
    //     }

    //     if(this.userGoalNowToEndTime!==undefined && this.userGoalStartToEndTime!==undefined){
    //       console.log("Hello")
    //        this.userGoalNowToEndTime = this.userGoalNowToEndTime.concat(this.currentTimeDiff);
    //        this.userGoalStartToEndTime = this.userGoalStartToEndTime.concat(this.startEndDiff);



    //     }


    //   }

    //    console.log(this.userGoalStartToEndTime);
    //    console.log(this.userGoalNowToEndTime);


    });
  }

  /////////////////////////////////////////////////// Added to repaint the screen once a filter has been selected //////////////////////////////////////////// 2/12/2021

  repaintGoalDisplay(){
    this.userGoalNowToEndTime = [''];
    this.userGoalStartToEndTime = [''];


    var tick;

    this.startEndDiff = 0;
    this.currentTimeDiff = 0;
    this.currentTime = moment();
    this.startGoalDate = new Date;
    this.endGoalDate = new Date;

    var goalDone;


    for(tick in this.userGoals){  //remember, this function's purpose is to create an iterable array for the homepagegoal displays.

      console.log(this.userGoalNowToEndTime);
      console.log(this.userGoalStartToEndTime);


      this.startGoalDate = moment(this.userGoals[tick].goalCreationDate)
      console.log("Start: " + this.startGoalDate);
      this.endGoalDate = moment(this.userGoals[tick].goalDueDate)
      console.log("End: " + this.endGoalDate);
      this.startEndDiff = this.endGoalDate.diff(this.startGoalDate, 'hours');
      console.log("Difference of Hours: " + this.startEndDiff);

      this.currentTimeDiff = this.endGoalDate.diff(this.currentTime, 'hours');



      //if(this.userGoals[tick].finishedOrNot !== undefined){
      goalDone = this.userGoals[tick].finishedOrNot;
      console.log(goalDone);
      console.log(this.userGoals[tick].goalTitle);
     //   console.log(goalDone);
     //   console.log(this.userGoals[tick].goalTitle);
      //}

      if(this.userGoalNowToEndTime[0]==='' && this.userGoalStartToEndTime[0]==='' ){
        console.log("Define me!")
         this.userGoalNowToEndTime[0] = this.currentTimeDiff;
         this.userGoalStartToEndTime[0] = this.startEndDiff;
         console.log(this.currentTimeDiff);
         console.log(this.startEndDiff);
         //console.log(this.userGoalNowToEndTime)
         //console.log(this.userGoalStartToEndTime)

         continue;
      }

      if(this.userGoalNowToEndTime!==undefined && this.userGoalStartToEndTime!==undefined){
        console.log("Hello")
         this.userGoalNowToEndTime = this.userGoalNowToEndTime.concat(this.currentTimeDiff);
         this.userGoalStartToEndTime = this.userGoalStartToEndTime.concat(this.startEndDiff);
         console.log(this.currentTimeDiff);
         console.log(this.startEndDiff);
         //console.log(this.userGoalNowToEndTime)
         //console.log(this.userGoalStartToEndTime)


      }


    }

  }


  /////////////////////////////////////////////////////////////////////////////////////


  showAll(){ //done
    this.userGoals = this.tempGoalsArray;
    console.log(this.userGoals);
    this.repaintGoalDisplay();
  }

  async showComplete(){ //done

           const itemcompletearray = await this.tempGoalsArray.filter(item => item.finishedOrNot === true);
           this.userGoals = itemcompletearray;
           console.log(this.userGoals);
           this.repaintGoalDisplay();
  }
  async showPastDue(){ // done
    var tempPastDueArray = this.tempGoalsArray.slice();
    for(var x in tempPastDueArray){  //userGoalNowToEndTime
      if(this.tempUserGoalNowToEnd[x]<=0 && (tempPastDueArray[x].finishedOrNot === false || tempPastDueArray[x].finishedOrNot === undefined)){
         tempPastDueArray[x].pastDue = "isPastDue";
      }
    }
    const itemPastDueArray = await tempPastDueArray.filter(item => item.pastDue === "isPastDue");
    this.userGoals = itemPastDueArray;
    console.log(this.userGoals);
    this.repaintGoalDisplay();
  }


  async showAlmostDue(){ // done
    var tempAlmostDueArray = this.tempGoalsArray.slice();

    for(var x in tempAlmostDueArray){  //userGoalNowToEndTime
      if(this.tempUserGoalNowToEnd[x] < this.tempUserGoalStartToEnd[x]/2 && this.tempUserGoalNowToEnd[x]>0) {
         if (tempAlmostDueArray[x].finishedOrNot === false || tempAlmostDueArray[x].finishedOrNot === undefined){
         tempAlmostDueArray[x].almostDue = "isAlmostDue";
         console.log(this.tempUserGoalNowToEnd[x]);
      }
     }
    }

    const itemAlmostDueArray = await tempAlmostDueArray.filter(item => item.almostDue === "isAlmostDue");
    this.userGoals = itemAlmostDueArray;
    console.log(itemAlmostDueArray);
    this.repaintGoalDisplay();

  }


  async newToOld(){ // done (sort of)
    var oldToNewArray = this.tempGoalsArray.slice();

    oldToNewArray = await oldToNewArray.sort((itema, itemb) => ( itema.goalDueDate < itemb.goalDueDate ? 1 : -1 ));
    this.userGoals = oldToNewArray;
    console.log(oldToNewArray);
    this.repaintGoalDisplay();

  }

  async oldToNew(){ // done (sort of)
    var oldToNewArray = this.tempGoalsArray.slice();

    oldToNewArray = await oldToNewArray.sort((itema, itemb) => (  itema.goalDueDate > itemb.goalDueDate ? 1 : -1 ));
    this.userGoals = oldToNewArray;
    console.log(oldToNewArray);
    this.repaintGoalDisplay();

  }

  hideShowSideNav(){
    console.log("hideshow")
    var sideNav = document.getElementById('sidenav');

   //add if statement to check if the phone is being held vertically.
    if(sideNav.style.visibility == 'visible'){
      $("#sidenav").fadeOut("slow", function(){
        $("#sidenav").css("visibility", "hidden");
        $("#icon1").css("color", "orange");
        $("#mother").css("margin-top", "-60vh");
      });

      return;
    }
    $("#sidenav").fadeIn("slow");
    $("#sidenav").css("visibility", "visible");
    $("#icon1").css("color", "white");
      $("#mother").css("margin-top", "-80vh");
  }

  sendToGoals(resourceIndex){
    console.log("Meet Your Goal");
    console.log(resourceIndex);
    //this.resourceIndex = resourceIndex;
    this.data.goalHubSend(resourceIndex);
    this.router.navigateByUrl('goalHome/goalHub');

  }




}
