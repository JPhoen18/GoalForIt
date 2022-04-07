import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resource } from './resource.model';
import { Observable } from 'rxjs';
import {UserAccount} from './useraccount.model';
import {Goals} from './goals.model';
import{HighPriorityList} from './highprioritylist.model';
import{MediumPriorityList} from './mediumprioritylist.model';
import{LowPriorityList} from './lowprioritylist.model';

@Injectable()
export class DataService {

  resource!: number  //number
  resIndex!: any
  userObj!: any
  subGoalNum!: number
  subuserObj!: any
  finalGoal!: any
  finalSubGoal!: any
  logInUser!: any //This is used for application to access user details once the user is logged in.
  homeProfileRes!: any; //for resources on the user profile homePage
  homeProfResObj!: any[]; //to actually pass resource object to new res display component.
  homeGoalRes!: any;
  goals!: Goals[] //Goals
  separateGoals!: Goals[]
  high!: HighPriorityList[] //High Priority Resource
  medium!: MediumPriorityList[] //Medium Priority Resource
  low!: LowPriorityList[] //Low Priority Resource
  subGoalSolo!: any;
  subGoalSoloIndex!: any;
  subGoalDisplay!: any; //spec for the subgoal page
  goalTitle!: any;
  resourcePack!: any;

  private resIndexSource = new BehaviorSubject(this.resIndex);
  private messageSource = new BehaviorSubject(this.resource);
  private goalSource = new BehaviorSubject(this.goals);
  private separateGoalSource = new BehaviorSubject(this.separateGoals);
  private highpriorlist = new BehaviorSubject(this.high);
  private mediumpriorlist = new BehaviorSubject(this.medium);
  private lowpriorlist = new BehaviorSubject(this.low);
  private userObjModel = new BehaviorSubject(this.userObj);
  private subGoalNumber = new BehaviorSubject(this.subGoalNum);
  private subUserObjModel = new BehaviorSubject(this.subuserObj);
  private finalGoalModel = new BehaviorSubject(this.finalGoal);
  private finalSubGoalModel = new BehaviorSubject(this.finalSubGoal);
  private finalhomeProfileRes = new BehaviorSubject(this.homeProfileRes);
  private finalHomeProfResObj = new BehaviorSubject(this.homeProfResObj);
  private finalHomeGoalRes = new BehaviorSubject(this.homeGoalRes);
  private finalSubGoalSolo = new BehaviorSubject(this.subGoalSolo);
  private finalSubGoalSoloIndex = new BehaviorSubject(this.subGoalSoloIndex);
  private finalSubGoalDisplay = new BehaviorSubject(this.subGoalDisplay)
  private finalGoalTitle = new BehaviorSubject(this.goalTitle)
  private finalResourcePack = new BehaviorSubject(this.resourcePack);
  loggedInUser = new BehaviorSubject(this.logInUser);

  currentGoalIndex = this.resIndexSource.asObservable();
  currentMessage = this.messageSource.asObservable();
  currentGoals = this.goalSource.asObservable();
  currentSeparateGoals = this.separateGoalSource.asObservable();
  currentHigh = this.highpriorlist.asObservable();
  currentMedium = this.mediumpriorlist.asObservable();
  currentLow = this.lowpriorlist.asObservable();
  currentUserObjModel = this.userObjModel.asObservable(); //this is a problem in addresourcedecision.
  currentSubGoalNum = this.subGoalNumber.asObservable();
  currentSubUserObj = this.subUserObjModel.asObservable();
  currentfinalGoal = this.finalGoalModel.asObservable();
  currentfinalSubGoal = this.finalSubGoalModel.asObservable();
  currentLogInUser = this.loggedInUser.asObservable();
  currentHomeProfileRes = this.finalhomeProfileRes.asObservable();
  currentHomeProfResObj = this.finalHomeProfResObj.asObservable();
  currentHomeGoalRes = this.finalHomeGoalRes.asObservable();
  currentSubGoalSolo = this.finalSubGoalSolo.asObservable();
  currentSubGoalSoloIndex = this.finalSubGoalSoloIndex.asObservable(); // subscribe in the edit-sub-goal-page
  currentSubGoalDisplay = this.finalSubGoalDisplay.asObservable();
  currentGoalTitle = this.finalGoalTitle.asObservable();
  currentResourcePack = this.finalResourcePack.asObservable();


  constructor() { }



passResourcePackage(respack){
  if(respack){
    this.finalResourcePack.next(respack);
    console.log("Needed in the resource single page display");
    console.log(this.finalResourcePack.getValue());
  }
}

  passGoalTitle(goalTitle){
    if(goalTitle){
      this.finalGoalTitle.next(goalTitle);
      console.log("Sending the Title!");
      console.log(this.finalGoalTitle.getValue());
    }
    localStorage.setItem('goalTitle', goalTitle);
  }

  passSubGoalToDisplay(subGoal){ // **also use after subgoal is edited; make sure the subgoal is up to date 
    if(subGoal){
      this.finalSubGoalSolo.next(subGoal);
      console.log("Sending sub-goal to it's special page!")
      console.log(this.finalSubGoalSolo.getValue());
    }
  }

  //session storage for subgoal
  passSubGoalToDisplayAsSession(subGoal){ //**also use after subgoal is edited; make sure the subgoal is up to date
    sessionStorage.setItem("spareSubGoal", JSON.stringify(subGoal));
  }

  getSubGoalFromSession(){
    var sessSubGoal = sessionStorage.getItem("spareSubGoal");
    return JSON.parse(sessSubGoal);
  }
  ///

  passSubGoalDisplayIndex(subGoalIndex){
    if(subGoalIndex){
      this.finalSubGoalSoloIndex.next(subGoalIndex);
      console.log("Subgoal now has an index!")
      console.log(subGoalIndex)
    }
  }

  //session storage for subGoal Index
  passSubGoalIndexAsStorage(subGoalIndex){
    sessionStorage.setItem("spareSubGoalIndex", JSON.stringify(subGoalIndex));
  }

  getSubGoalIndexFromSessions(){
    var sessGoalIndex = sessionStorage.getItem("spareSubGoalIndex");
    return JSON.parse(sessGoalIndex);
  }
  ///

  displaySubGoalPage(entireSubGoal){
    if(entireSubGoal){
        this.finalSubGoalDisplay.next(entireSubGoal);
        console.log("subgoal for subgoal page display")
        console.log(entireSubGoal)
    }
  }
  passLogInUser(logUser){ //This is to acces the logged in user
      if(logUser){
        this.loggedInUser.next(logUser);
        console.log("The logged in user is:");
        console.log(this.loggedInUser.getValue());
      }
  }
  passHomePageRes(resInd){
    if(resInd>=0){
      console.log(resInd);
      this.finalhomeProfileRes.next(resInd);
    }
  }

  passHomePageResObject(actualRes){
    if(actualRes){
      console.log(actualRes);
      this.finalHomeProfResObj.next(actualRes);
    }
  }

  goalHubSend(homegoalhub){
    if(homegoalhub>=0){
       console.log(homegoalhub)
       this.finalHomeGoalRes.next(homegoalhub);
    }
  }

  passIndex(message: number) {
    if (message>=0){
    this.messageSource.next(message)
    console.log("Message Received!")
    console.log(message)
  }
   else {
     console.log("Uh-oh!")
   }
  }

  passUser(userprofile: Goals[]){  //used to give info to goaldisplay and subgoal display
       if(userprofile){
         this.goalSource.next(userprofile)
         console.log("User Info Received!")
         console.log(userprofile)
       }
  }

  passSeparateUser(userprofile: Goals[]){ //used to just give information to the resource display component
      if(userprofile){
        this.separateGoalSource.next(userprofile)
        console.log("User Info for the resource display!")
        console.log(userprofile)
      }
  }

  sendSessionSubgoalInfo(subgoal){
    console.log(subgoal);
    sessionStorage.setItem("extraSubgoal", JSON.stringify(subgoal));
  }

  getSessionSubgoalInfo(){
    var goalSubgoalNeeds = JSON.parse(sessionStorage.getItem("extraSubgoal"));
    return goalSubgoalNeeds;
  }

  passHigh(resource: HighPriorityList[]){
      if(resource){
        this.highpriorlist.next(resource)
        console.log("High Priority Resource Here!")
        console.log(resource)
      }

  }

  passMedium(resource: MediumPriorityList[]){
    if(resource){
      this.mediumpriorlist.next(resource)
      console.log("Medium Priority Resource Here!")
      console.log(resource)
    }
  }

  passLow(resource: LowPriorityList[]){
    if(resource){
      this.lowpriorlist.next(resource)
      console.log("High Priority Resource Here!")
      console.log(resource)
    }
  }

  passResIndex(resIndex: any){  //Receiving the index of the goal 8/6/19 --> Currently not in use
    if(resIndex){
      console.log("Second Step")
      console.log(resIndex)
      this.resIndexSource.next(resIndex)
      console.log("Index for Goal in the house")
      console.log(resIndex)

    }
  }
// mark for session storage 2/18/21
  passUserObj(userObj:any){
      if(userObj){
      //   console.log("This is the user Object")
         this.userObjModel.next(userObj)
      //   console.log(userObj)
      }

  }

  passSubGoalCount(subGoalNum: number){
    if(subGoalNum){
  //    console.log("This is the number")
      this.subGoalNumber.next(subGoalNum)
  //    console.log(subGoalNum)
    }
  }

  passSubUserObj(subuserObj:any){
      if(subuserObj){
    //     console.log("This is the user Object")
         this.subUserObjModel.next(subuserObj)
         console.log("I need to know")
         console.log(this.subUserObjModel.getValue())
    //     console.log(subuserObj)
      }

  }

  passFinalGoal(finalGoal){
    if(finalGoal){
        this.finalGoalModel.next(finalGoal)
        console.log("Final Goal!")
        console.log(this.finalGoalModel.getValue())
    }

  }

  passFinalSubGoal(finalSubGoal){

    if(finalSubGoal){
        this.finalSubGoalModel.next(finalSubGoal)
        console.log("Final Sub Goal!")
        console.log(this.finalSubGoalModel.getValue())
    }
  }
//Save the user info in sessionStorage to retrieve whenever needed

  setUserAppWide(userdata){
    console.log("Here I am placing the user for the session")
    console.log(userdata);
    console.log(typeof(userdata));
    sessionStorage.setItem('userdata', JSON.stringify(userdata));
  }

  getUserAppWide(){
    var tempuser = sessionStorage.getItem('userdata');
    //tempuser = JSON.parse(tempuser);
    console.log(typeof(tempuser));
    console.log(JSON.stringify(tempuser));
    return JSON.parse(tempuser);
  }

// 8/21/19 Save the subgoals just made and user goals in session storage, call everytime to get the subgoals and usergoals when page refreshed
setCurrentGoals(goals){
  console.log("Here I am placing the user for the session")
  console.log(goals);
  console.log(typeof(goals));
  sessionStorage.setItem('currentgoals', JSON.stringify(goals));
}
setCurrentSubGoals(subgoals){
  console.log("Here I am placing the user for the session")
  console.log(subgoals);
  console.log(typeof(subgoals));
  sessionStorage.setItem('currentsubgoals', JSON.stringify(subgoals));
}

//Backup storage to track the subgoal I am on when the page refreshes and erases my information
passBackupSubGoalCount(currentCount){
  console.log(currentCount);
  sessionStorage.setItem('currentCount', JSON.stringify(currentCount));
}

getBackupSubgoalCount(){
   return JSON.parse(sessionStorage.getItem('currentCount'));
}
deleteBackupSubgoalCount(){
   sessionStorage.removeItem('currentCount');
   console.log(JSON.parse(sessionStorage.getItem('currentCount')));
}
///////

getCurrentGoals(){
  var goals = sessionStorage.getItem('currentgoals');
  //tempuser = JSON.parse(tempuser);
  console.log(goals);
  return JSON.parse(goals);
}

getCurrentSubGoals(){
  var subgoals = sessionStorage.getItem('currentsubgoals');
  //tempuser = JSON.parse(tempuser);
  console.log(typeof(subgoals));
  return JSON.parse(subgoals);
}

getGoalTitle(){
  return localStorage.getItem('goalTitle');
}

deleteGoalTitle(){
  localStorage.removeItem('goalTitle');
}


}
