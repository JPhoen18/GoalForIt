import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';

@Component({
  selector: 'app-homepageresourcedisplay',
  templateUrl: './homepageresourcedisplay.component.html',
  styleUrls: ['./homepageresourcedisplay.component.css'],
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
export class HomepageresourcedisplayComponent implements OnInit  {
  resourcelists: any;
  heightarray: any = [];
  goaltitles: any = [];
  resourceTitles: any = [];
  goalIndexes: any[];
  divStyle: any;
  indexholder: any;
  startNgFor: any;
  decoyStyle: any;

  //highlist: any;
  //mediumlist: any;
  //lowlist: any;
  emailID: any;
  goalselect: boolean = false;
  goalInfo: any;
  index: any;
  sendHomeRes: any;// stores the homepage resource index
  specGoal: any; //holds goals from the goalhub
  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) {  }

  ngOnInit() {

    //this.highlist = [];
    //this.mediumlist = [];
    //this.lowlist = [];
    this.resourcelists = [];

    this.emailID = this.data.getUserAppWide().user.email;

    console.log(this.emailID);

    this.data.currentHomeGoalRes.subscribe((res) =>{ //This is the same variable that the goalhomepagecomponent uses to display goal details.
      console.log("Super Index");
      console.log(res);
      if (res>=0 && res!=9999){ //& res is not equal to "decoy"
        this.goalselect=true;

      }

      if(res && res===9999){
        this.goalselect=false;
      }

      console.log("Goal Index For Resources:")
      console.log(res)
      this.index = res;
    })

    this.data.currentSeparateGoals.subscribe((res) =>{
      console.log("Use for specific goal resources");
      console.log(res);
      this.specGoal = res;
      console.log(this.specGoal);
    })

      this.data.currentGoals.subscribe((res) =>{   //This is not being passed.
        console.log("Here are the goals!")
        console.log(res)



        if(this.goalselect){
          this.goalInfo = this.specGoal;
          console.log(this.goalInfo);
          var x;
          var y;
          var z;
          var d;
          console.log("Status point")
          console.log(this.goalInfo[this.index].HighPriority)
          console.log(this.goalInfo[this.index].MediumPriority)
          console.log(this.goalInfo[this.index].LowPriority)
          //the double nested object that contains "High Priority" needs to be taken out
          for(x in this.goalInfo[this.index].HighPriority){
                console.log(this.goalInfo[this.index].HighPriority[x])
                if(this.resourcelists[0]!==undefined){
                  console.log(this.goalInfo[this.index].HighPriority[x])

                  this.resourcelists= this.resourcelists.concat(this.goalInfo[this.index].HighPriority[x]);
                }
                if(this.resourcelists[0]===undefined){
                this.resourcelists = [{'':''}];
                console.log(this.goalInfo[this.index].HighPriority[x])
                this.resourcelists[0] = this.goalInfo[this.index].HighPriority[x];
              }

               console.log(this.resourcelists);
        }

          for(y in this.goalInfo[this.index].MediumPriority){
          ///  console.log(this.goalInfo[this.index].MediumPriority[0][x])
                console.log(this.goalInfo[this.index].MediumPriority[y])
                this.resourcelists= this.resourcelists.concat(this.goalInfo[this.index].MediumPriority[y]);
                console.log(this.resourcelists);


          }

          for(z in this.goalInfo[this.index].LowPriority){
                console.log(this.goalInfo[this.index].LowPriority[z])
                this.resourcelists= this.resourcelists.concat(this.goalInfo[this.index].LowPriority[z]);
                console.log(this.resourcelists);



          }

          console.log("My Goal's Resources");
          console.log(this.resourcelists)
        //  this.goalselect = false;
          return;
        }

        else if(this.goalselect==false){
          this.goalInfo = res;
          this.goaltitles[0] = "";
          //this.resourceTitles[0] = "";
          var goals;
          var high;
          var med;
          var low;
          var holdGoal;
          var eachHigh;
          var eachMed;
          var eachLow;
          this.goalIndexes = [''];
          console.log("I am here")
          console.log(this.goalInfo)
          for(goals in this.goalInfo){
            console.log("Looping")
            console.log(goals)
            this.goaltitles[goals] = this.goalInfo[goals].goalTitle;
            holdGoal = this.goaltitles[goals];
            console.log("GoalTitle")
            console.log(this.goaltitles);
            console.log(this.goalInfo[goals].HighPriority)
            console.log(this.goalInfo[goals].MediumPriority)
            console.log(this.goalInfo[goals].LowPriority)
            for(high in this.goalInfo[goals].HighPriority){
                console.log(high);
                this.resourcelists = this.resourcelists.concat(this.goalInfo[goals].HighPriority[high]);
                for(eachHigh in this.goalInfo[goals].HighPriority[0]){
                this.resourceTitles = this.resourceTitles.concat(holdGoal);

                if(this.goalIndexes[0]!==''){
                this.goalIndexes = this.goalIndexes.concat(goals);
                console.log(this.goalIndexes);
              }

                if(this.goalIndexes[0]===''){
                  this.goalIndexes[0] = goals;
                }//Array of goal indexes for resourcetitles


            }

                console.log(this.resourceTitles);
            }
            for(med in this.goalInfo[goals].MediumPriority){
                this.resourcelists = this.resourcelists.concat(this.goalInfo[goals].MediumPriority[med]);
                for(eachMed in this.goalInfo[goals].MediumPriority[0]){
                this.resourceTitles = this.resourceTitles.concat(holdGoal);
                this.goalIndexes = this.goalIndexes.concat(goals);
                console.log(this.goalIndexes);
              }
                console.log(this.resourceTitles);


            }
            for(low in this.goalInfo[goals].LowPriority){
                this.resourcelists = this.resourcelists.concat(this.goalInfo[goals].LowPriority[low]);
                for(eachLow in this.goalInfo[goals].LowPriority[0]){
                this.resourceTitles = this.resourceTitles.concat(holdGoal);
                this.goalIndexes = this.goalIndexes.concat(goals);
                console.log(this.goalIndexes);
              }
                console.log(this.resourceTitles);



            }

          }

      }

   console.log("Here are the Goal Sources!")
   console.log(this.goalIndexes);
   console.log(this.resourcelists);
   console.log(this.resourceTitles);
})}



  callIt(c){
    console.log(c);
    this.sendHomeRes = c;
    if(!this.goalselect){
      var goalIndex = this.goalIndexes[c];
      console.log(goalIndex);
      console.log(this.goalInfo[goalIndex]);

      this.data.passResourcePackage([goalIndex, this.goalInfo[goalIndex], this.emailID]);
      this.data.passHomePageRes(this.sendHomeRes);
      this.data.passHomePageResObject(this.resourcelists);
      this.router.navigateByUrl('goalHome/homeProfileResource');
    }
    if(this.goalselect){

      this.data.passHomePageRes(this.sendHomeRes);
      this.data.passHomePageResObject(this.resourcelists);
      this.router.navigateByUrl('goalHub/homeProfileResource');
    }

  }

  }
