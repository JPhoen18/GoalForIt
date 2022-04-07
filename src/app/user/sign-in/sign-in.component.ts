import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import {NgForm} from '@angular/forms';
import {UserAccount} from '../../useraccount.model';
import {HighPriorityList} from '../../highprioritylist.model';
import {MediumPriorityList} from '../../mediumprioritylist.model';
import {LowPriorityList} from '../../lowprioritylist.model';
import {Goals} from '../../goals.model';
import { ResourceService } from '../../resource.service';
import { Router } from '@angular/router';
import {DataService} from '../../data.service';
import {ShareInfoServiceService} from '../../share-info-service.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private userService: UserService, private resourceservice : ResourceService, private router : Router,
    private data: DataService, private sharedInfoServer: ShareInfoServiceService) { }

  ngOnInit(){
    if(this.resourceservice.isLoggedIn() && this.data.getUserAppWide!=null){
  //    this.sharedInfoServer.sendLogOutCheck();
        this.router.navigateByUrl('/goalHome');

    }
    //I need to reset the user variable in sessions for the insertion of goals.
    //Without this section, when I make new goals, they do not save in the database.
    var tempToken = this.resourceservice.getToken();
    var tempTokenObj = {'token' : tempToken};

    let otherDataSource = this.data;
    let otherRouter = this.router;
    this.resourceservice.getUserInfo(tempTokenObj, function(result){
       console.log("Here is the User Info");
       console.log(result);
       otherDataSource.setUserAppWide(result);
  //     this.sharedInfoServer.sendLogOutCheck();
       otherRouter.navigateByUrl('/goalHome');//router.navigateByUrl('goalCreation');
    });
  }


    onSubmit(form:  NgForm){
      console.log("Here are the values")


      //console.log(form.value)
     //var emailpass = {email : form.value.email,
      //                password : form.value.password}
     //console.log(emailpass);
    var jwtreturn;
    var resulting;
    var errorMessage = "Invalid Email & Password Combination"
    let getUserDetails = this.resourceservice;
    let userdata = this.data;
    let router = this.router;
    let infToServe = this.sharedInfoServer;
    this.resourceservice.getJWTToken(form.value, function(resulting, err){
      if(!resulting){
        console.log("Nothing I can do!");
      }
      console.log("Here is the front end");
      console.log(resulting);
      jwtreturn = resulting;
      console.log(jwtreturn.token)  //7-15-19 This works!  I get my token back and can send it to the next route!
      getUserDetails.setToken(jwtreturn.token);
      getUserDetails.getUserInfo(jwtreturn, function(resultant){
         console.log("Here is the User Info");
         console.log(resultant);  //This workds, authentication works and the correct user information is returned.
         //here is where I would place the navigateByUrl code.  Since this code is
         //executed once the token has been verified and a user is returned.
        // userdata.passLogInUser(resultant);
         userdata.setUserAppWide(resultant);
         console.log(resultant.user._id);
         getUserDetails.setUserSession(resultant.user._id);
         infToServe.sendLogOutCheck();
         router.navigateByUrl('goalHome');//router.navigateByUrl('goalCreation');
      });
    });
}

  onLogout(){
      this.resourceservice.deleteToken();
      this.router.navigateByUrl('/signin');
  }

    // getUserDetails(jwtvalue){
    // this.resourceservice.getUserInfo(jwtvalue, function(resultant){
    //  console.log("Here is the User Info");
  //    console.log(resultant);
  //  });
//  }

}
