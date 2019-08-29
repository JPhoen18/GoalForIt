import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';

@Component({
  selector: 'app-homepagegoals',
  templateUrl: './homepagegoals.component.html',
  styleUrls: ['./homepagegoals.component.css']

})
export class HomepagegoalsComponent implements OnInit {

  userID: any; //This will be set in the future when the user logs in
  firstName: any;
  lastName: any;
  emailID: any;
  sessionUser: any;
  userAccount: UserAccount;
  userGoals: any;
  showUserGoals: any;
  showUserResources: any;
  showTimeLine: any;
  goalcount: any;

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
          this.firstName = this.userAccount.firstname;
          this.lastName = this.userAccount.lastname;
          this.emailID = this.userAccount.email;
          this.goalcount = this.userGoals.length;
          this.data.passUser(this.userGoals); //I am passing the user information to the resource & homepagedisplay components.
        //  console.log("HighResource")
        //  console.log(this.userGoals)
        //  console.log(this.userAccount.goals[0].HighPriority)
      //  for (var goal = 0; goal<this.userGoals.length; var++)=>{
      //      if this.userGoals[goal].goaltitle==this.userAccount.goals
      //  }

      //    console.log(this.userGoals[0].HighPriority)
      //    this.data.passHigh(this.userGoals[0].HighPriority);
      //    this.data.passMedium(this.userGoals[0].MediumPriority);
      //    this.data.passLow(this.userGoals[0].LowPriority);

        })
  }

  showGoals(){
      this.showUserGoals = true;
      this.showUserResources = false;
      this.showTimeLine = false;
  }

  showResources(){
    this.data.goalHubSend(9999);
    this.showUserResources = true;
    this.showUserGoals = false;
    this.showTimeLine = false;

  }
  makeGoals(){
    this.router.navigateByUrl('goalCreation')
  }
}
