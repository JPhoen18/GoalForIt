import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resource } from './resource.model'; //added
import {VideoResource} from './videoresource.model'; //added
import {RedditResource} from './redditresource.model';
import {UserAccount} from './useraccount.model';
import {HighPriorityList} from './highprioritylist.model';
import {MediumPriorityList} from './mediumprioritylist.model';
import {LowPriorityList} from './lowprioritylist.model';
import {Goals} from './goals.model';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {


  title: string;
  author: string;
  response: string;

  webtitle: string;
  weburl:string;
  websummary: string;

  vidtitle: string;
  vidchanneltitle: string;
  vidurl: string;
  viddescription: string;

  highpriority: any;
  mediumpriority: any;
  lowpriority: any;


highpriorlist : HighPriorityList = {
      Title:'',
      AuthorURL: '',
      Content: ''
    }
 medpriorlist : MediumPriorityList = {
      Title:'',
      AuthorURL: '',
      Content: ''
    }
lowpriorlist : LowPriorityList = {
      Title:'',
      AuthorURL: '',
      Content: ''
    }
  //altObj: any;

  userID: any;
  major: any;
  jwtinfo: any;
  emailpassword: any;
  firstname: String;
  lastname: String;
  userid: String;
  password: String;
  email: String;
  goals: [Goals];
  admin: Boolean;
  token: String;
  goaltitle: String;
  goaltitleObject: any;
  maingoal : any;
  mainsubgoal: any;
  highpri: any;
  medpri: any;
  lowpri: any;
  newGoalEdit: any;
  deleteSubPack: any;

   noauthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
//Used in auth interceptor
  uri = 'http://10.0.0.139:4000';

  constructor(private http: HttpClient) { }

  getJWTToken(emailpassword, fun){ //will return the jwt token to the sign in component
     this.http.post(`${this.uri}/mydb/authenticate`, emailpassword, this.noauthHeader)//, headers: {'authorization':'Bearer '})
             .subscribe(function(res){
               console.log("Back in time!")
               console.log(res);
               fun(res); // callback function for the sign in component to get the token(Hopefully this works)
             });
  }

  deleteGoal(goal, index, email){
    console.log("About to delete a subgoal with:")
    console.log(goal)
    console.log(index)
    console.log(email)
    this.deleteSubPack = {goal, index, email}
    this.http.post(`${this.uri}/mydb/deleteGoal`, this.deleteSubPack)
              .subscribe(function(res) {
                console.log(res);
                console.log("Delete specific goal")
              })
  }


  deleteSubGoal(subgoal, index, email){
    console.log("About to delete a subgoal with:")
    console.log(subgoal)
    console.log(index)
    console.log(email)
    this.deleteSubPack = {subgoal, index, email}
    this.http.post(`${this.uri}/mydb/deleteSubGoal`, this.deleteSubPack)
              .subscribe(function(res) {
                console.log(res);
                console.log("Delete specific subgoal")
              })
  }

  sendNewGoalSubGoal(goalie, indx, email){
    console.log("These is the goal with updates");
    console.log(goalie);
    console.log(indx);
    console.log(email);
    this.newGoalEdit = {goalie, indx, email};
    this.http.post(`${this.uri}/mydb/updateGoal`, this.newGoalEdit)
              .subscribe(function(res) {
                console.log(res);
                console.log("Replace specific goal")
              })

  }

  sendResourceEdit(indx, highpri, medpri, lowpri, email){
    console.log("These is the goal with updates");
    console.log(indx);
    console.log(highpri);
    console.log(medpri);
    console.log(lowpri);
    console.log(email);
    this.newGoalEdit = {indx, highpri, medpri, lowpri, email};
    this.http.post(`${this.uri}/mydb/updateGoalResources`, this.newGoalEdit)
              .subscribe(function(res) {
                console.log(res);
                console.log("Read it or not read it?")
              })

  }

  editGoal(editGoal, editindx, editemail){
    console.log(editGoal);
    console.log(editindx);
    var goalIndx = {editGoal, editindx, editemail}
    this.http.post(`${this.uri}/mydb/editGoal`, goalIndx)
              .subscribe(function(res) {
                console.log(res);
                console.log("Replace specific goal")
              })
  }

  sendSubGoalEdits(email, subgoal, goalindex){
    var idSubIndx = {email, subgoal, goalindex};
    this.http.post(`${this.uri}/mydb/editSubGoal`, idSubIndx)
              .subscribe(function(res) {
                  console.log(res);
                  console.log("Editing a subgoal information")
    })
  }

  sendTitleForWebResource(goaltitle){
    console.log(typeof(goaltitle));
    this.goaltitleObject = { goaltitle: goaltitle};
    var gtWebObj = JSON.stringify(this.goaltitleObject);

    this.http.get(`${this.uri}/mydb/resourceWebCall/${gtWebObj}`)
                  .subscribe(function(res){
                  console.log("Yay it worked for the articles");
                  console.log(res);
                  localStorage.setItem('userArticles', JSON.stringify(res));
                          //return;
                });

  }

   sendTitleForVidResource(goaltitle){
    console.log(typeof(goaltitle));
    this.goaltitleObject = { goaltitle: goaltitle};
    var gtObj = JSON.stringify(this.goaltitleObject);

    this.http.get(`${this.uri}/mydb/resourceVidCall/${gtObj}`)
              .subscribe(function(res){
                console.log("Yay it worked for the videos");
                console.log(res);
                //return;
                localStorage.setItem('userVideos', JSON.stringify(res));
              });

  }

  sendTitleForRedResource(goaltitle){
    console.log(typeof(goaltitle));
    this.goaltitleObject = { goaltitle: goaltitle};
    var getRedObj = JSON.stringify(this.goaltitleObject);
    this.http.get(`${this.uri}/mydb/resourceRedCall/${getRedObj}`)
              .subscribe(function(res){
                console.log(res);
                console.log("Yay it worked for the reddit resources");
                localStorage.setItem('userReddit', JSON.stringify(res));
              });

  }

  setUserSession(usersession){
    console.log("Here I am placing the user session")
    console.log(usersession);
    localStorage.setItem('usersession', usersession);
  }

  getUserSession(){
    var tempuser = localStorage.getItem('usersession');
    //tempuser = JSON.parse(tempuser);
    console.log(typeof(tempuser));
    return tempuser;
  }

  setToken(token){
      localStorage.setItem('token', token);
      //This is set once the user is returned to the frontend
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
      localStorage.removeItem('token');
  }

  setBackupResIndex(res){
   sessionStorage.setItem('currentGoalResIndex', JSON.stringify(res));
  }

  getBackupResIndex(res){
     return JSON.parse(sessionStorage.getItem('currentGoalResIndex'));
  }


  setBackupResObj(res){
   sessionStorage.setItem('currentGoalBackupObj', JSON.stringify(res));
  }

  getBackupResObj(res){
     return JSON.parse(sessionStorage.getItem('currentGoalBackupObj'));
  }

  setBackupResourcePack(res){
   sessionStorage.setItem('currentBackupResourcePack', JSON.stringify(res));
  }

  getBackupResourcePack(res){
     return JSON.parse(sessionStorage.getItem('currentBackupResourcePack'));
  }

  //setting sessions variable for the goal index incase the goal is refreshed.
  setGoalIndexMarker(goalIdx){
     sessionStorage.setItem('currentGoalIndex', JSON.stringify(goalIdx));

  }

  getGoalIndexMarker(){
    return JSON.parse(sessionStorage.getItem('currentGoalIndex'));
  }


  //next two functions ensures that the first goal form information is saved upon refresh
  storeFirstGoalInfo(goalInfo){
    console.log(goalInfo);
    sessionStorage.setItem('currentGoal', JSON.stringify(goalInfo));
  }

  getFirstGoalInfo(){
    return JSON.parse(sessionStorage.getItem('currentGoal'));
  }
  ////

  // next two functions store the amount of subgoals needed for the goal, incase of window refresh.
  passSubGoalHolder(goalnum){
    console.log(goalnum);
    sessionStorage.setItem('currentGoalNumber', JSON.stringify(goalnum));

  }
  getSubGoalHolder(){
    return JSON.parse(sessionStorage.getItem('currentGoalNumber'));
  }
  ////

 // next two functions save and retrieve the current subgoal under construction, incase of window refresh
 passCurrentSubgoalArray(currentSubgoal){
   console.log(currentSubgoal);
   sessionStorage.setItem('recentSubgoal', JSON.stringify(currentSubgoal));
 }

 getCurrentSubgoalArray(){
   return JSON.parse(sessionStorage.getItem('recentSubgoal'));
 }

 deleteCurrentSubgoalArray(){
   sessionStorage.removeItem('recentSubgoal');
   console.log(sessionStorage.getItem('recentSubgoal'));
 }


 /// copy of above two functionS
 passSecondarySubgoalCopy(subgoalArrayCopy){
   console.log(subgoalArrayCopy);
   sessionStorage.setItem('subgoalArrayCopy', JSON.stringify(subgoalArrayCopy));
 }

 getSecondarySubgoalCopy(){
   return JSON.parse(sessionStorage.getItem('subgoalArrayCopy'));
 }

 deleteSecondarySubgoalCopy(){
   sessionStorage.removeItem('subgoalArrayCopy');
   console.log(sessionStorage.getItem('subgoalArrayCopy'));
 }
 //////


 //// Saves the group tier that a subgoal belongs to
 passGroupTierNum(num){
   console.log(num);
   sessionStorage.setItem('groupTierNum', JSON.stringify(num));
 }
 getGroupTierNum(num){
   console.log(num);
   return JSON.parse(sessionStorage.getItem('groupTierNum'));
 }
 deleteGroupTierNum(){
   sessionStorage.removeItem('groupTierNum');
   console.log(sessionStorage.getItem('groupTierNum'));
 }
 ///////


  getUserPayload(){
    var token = this.getToken();
    if(token){
       var userPayload = atob(token.split('.')[1]);
       return JSON.parse(userPayload);
    }
    else
        return null;
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload)
        return userPayload.exp > Date.now() / 1000;
    else
        return false;
  }

  getUserInfo(jwtinfo, func){
    console.log("In the resource service getUserInfo()");
    this.http.post(`${this.uri}/mydb/userProfile`, jwtinfo, {headers: {'authorization':'Bearer '+ jwtinfo.token + ''}})
            .subscribe(function(res){
              console.log("Back with the User stuff!")
              console.log(res);
              func(res); // callback function for the sign in component to get the token(Hopefully this works)
            });
  }



  getUser(userID) {
    console.log(userID)
      return this.http.get(`${this.uri}/mydb/findUserAccount/${userID}`);
      //.subscribe(res => console.log('User returned'));

  }
  getResources() {

  var webResource = JSON.parse(localStorage.getItem('userArticles'));
  console.log(webResource);
  return webResource;

  //  Herewith we’re sending an HTTP GET request to the /issues end point of back-end server. The list of issues is retrieved from the MongoDB database and then returned in JSON format.
  }

  getVideoResources() {
  //add code to fetch resources from local storage.
  var tempVids = JSON.parse(localStorage.getItem('userVideos'));
  //tempuser = JSON.parse(tempuser);
  console.log(tempVids);
  return tempVids;
    //return this.http.get(`${this.uri}/mydb/vidresources`);


  }

  getRedditResources() {
    //return this.http.get(`${this.uri}/mydb/forumresources`);

    //add code to fetch resources from local storage.
    var tempReddit = JSON.parse(localStorage.getItem('userReddit'));
    //tempuser = JSON.parse(tempuser);
    console.log(tempReddit);
    return tempReddit;
  }

  getRedditResourceList(){
    return this.http.get(`${this.uri}/mydb/getRedditPosts`);

  }

  getVideoResourceList(){
    return this.http.get(`${this.uri}/mydb/getVidResources`);

  }

  getWebResourceList(){
    return this.http.get(`${this.uri}/mydb/getWebResources`);

  }

  getEncrypt(value){
    console.log("Here")
    this.http.post(`${this.uri}/mydb/register`, value, this.noauthHeader)
                  .subscribe(res => console.log("About to get registered!."));
  }

  insertNewUser(userAccount){
    console.log("Second check for the user!")
    console.log(userAccount)
    this.firstname = userAccount.first,
    this.lastname = userAccount.last,
    this.userid = userAccount.user,
    this.password = userAccount.pass,
    this.email = userAccount.email,
    this.goals = userAccount.goals,
    this.admin = false;

        const newUserObj = {
            firstname: this.firstname,
            lastname: this.lastname,
            userid: this.userid,
            password: this.password,
            email: this.email,
            goals: [{
               goalTitle: '',
               description: '',
               goalCreationDate: new Date,
               goalDueDate: new Date,
               HighPriority: [this.highpriorlist],
               MediumPriority: [this.medpriorlist],
               LowPriority: [this.lowpriorlist]
             }],
            admin: this.admin
        }
      console.log("New User Object!")
      console.log(newUserObj)

      this.http.post(`${this.uri}/mydb/createUserAccount`, newUserObj)
                    .subscribe(res => console.log("Account Saved in the MongoDB Database."));

  };

  insertRedditResource(title, author, response){
        this.title = title;
        this.author = author;
        this.response = response;
        const obj = {
            RedditTitle: this.title,
            RedditAuthor: this.author,
            AuthorResponse: this.response
        };

        this.http.post(`${this.uri}/mydb/saveRedditPosts`, obj)
                    .subscribe(res => console.log("Reddit Post saved in Resource List."));
  }

  insertNewUserGoal(maingoal, mainsubgoal, highpri, medpri, lowpri, loggedUser){
      console.log("In the resource goal area")
      console.log(maingoal);///    console.log(maingoal);
      console.log(mainsubgoal);///    console.log(mainsubgoal);
      console.log(highpri);
      console.log(medpri);
      console.log(lowpri);
      console.log(loggedUser);
      console.log(loggedUser.user.email);
      const useremail = loggedUser.user.email;
      //console.log(loggedUser.user.)
        const obj = {
           goalTitle: maingoal[0][0],
           description: maingoal[0][1],
           goalCreationDate: maingoal[0][2],
           goalDueDate: maingoal[0][3],
           goalSubGoal: mainsubgoal,  //suddenly not working
           HighPriority: highpri,
           MediumPriority: medpri,
           LowPriority: lowpri
         }
         console.log("Here it is!");
         console.log(obj);
         const userObj = { useremail, obj }
         //This contructs the goal object well enough so that it can be inserted into the database.
      this.http.post(`${this.uri}/mydb/goalInsert`, userObj)
              .subscribe(res => console.log("Sent the Goal for Insertion"))

  }

  insertResource(webtitle, weburl, websummary){
    this.webtitle = webtitle;
    this.weburl = weburl;
    this.websummary = websummary;

    const obj = {
        title: this.webtitle,
        URL: this.weburl,
        Summary: this.websummary
    };
        this.http.post(`${this.uri}/mydb/saveWebResources`, obj)
                    .subscribe(res => console.log("Web Resource saved in Resource List"));
  }

  insertVidResource(vidtitle, vidchanneltitle, vidurl, viddescription){
    this.vidtitle = vidtitle;
    this.vidchanneltitle = vidchanneltitle;
    this.vidurl = vidurl;
    this.viddescription = viddescription;

    const obj = {
        title: this.vidtitle,
        channelTitle: this.vidchanneltitle,
        URL: this.vidurl,
        description: this.viddescription
    };
        this.http.post(`${this.uri}/mydb/saveVidResources`, obj)
                    .subscribe(res => console.log("Video Resource saved in Resource List"));
  }
// The three methods for saving priority lists can be refactored //
  insertHighPriority(highpriority){
         this.highpriority = highpriority;
          var altObj;
         if(this.highpriority.hasOwnProperty('RedditTitle')){
           altObj = {
             Title: this.highpriority['RedditTitle'],
             AuthorURL: this.highpriority['RedditAuthor'],
             Content: this.highpriority['AuthorResponse'],

           }}

           else if(this.highpriority.hasOwnProperty('channelTitle')){
            altObj = {
              Title: this.highpriority['title'],
              AuthorURL: this.highpriority['URL'],
              Content: this.highpriority['description'],


            }}

            else if(this.highpriority.hasOwnProperty('Summary')){
             altObj = {
               Title: this.highpriority['title'],
               AuthorURL: this.highpriority['URL'],
               Content: this.highpriority['Summary'],


             }}

             else {
               altObj = {
                 Title: this.highpriority['Title'],
                 AuthorURL: this.highpriority['AuthorURL'],
                 Content: this.highpriority['Content'],
             }}

        console.log("Check High: ")
        console.log(altObj)
        this.http.post(`${this.uri}/mydb/saveHighPriority`, altObj)
                    .subscribe(res => console.log("High Priority List saved"));

  }

  insertMediumPriority(mediumpriority){
    var altObj;
    this.mediumpriority = mediumpriority;
    if(this.mediumpriority.hasOwnProperty('RedditTitle')){
      altObj = {
        Title: this.mediumpriority['RedditTitle'],
        AuthorURL: this.mediumpriority['RedditAuthor'],
        Content: this.mediumpriority['AuthorResponse'],

      }}

      else if(this.mediumpriority.hasOwnProperty('channelTitle')){
       altObj  = {
         Title: this.mediumpriority['title'],
         AuthorURL: this.mediumpriority['URL'],
         Content: this.mediumpriority['description'],


       }}

       else if(this.mediumpriority.hasOwnProperty('Summary')){
       altObj  = {
          Title: this.mediumpriority['title'],
          AuthorURL: this.mediumpriority['URL'],
          Content: this.mediumpriority['Summary'],


        }}

        else {
          altObj  = {
            Title: this.mediumpriority['Title'],
            AuthorURL: this.mediumpriority['AuthorURL'],
            Content: this.mediumpriority['Content'],
        }}

        console.log("Check Medium: ")
        console.log(altObj)
        this.http.post(`${this.uri}/mydb/saveMediumPriority`, altObj)
                    .subscribe(res => console.log("Medium Priority List saved"));
  }

  insertLowPriority(lowpriority){
    var altObj;
    this.lowpriority = lowpriority;
    if(this.lowpriority.hasOwnProperty('RedditTitle')){
      altObj  = {
        Title: this.lowpriority['RedditTitle'],
        AuthorURL: this.lowpriority['RedditAuthor'],
        Content: this.lowpriority['AuthorResponse'],

      }}

      else if(this.lowpriority.hasOwnProperty('channelTitle')){
       altObj  = {
         Title: this.lowpriority['title'],
         AuthorURL: this.lowpriority['URL'],
         Content: this.lowpriority['description'],


       }}
       else if(this.lowpriority.hasOwnProperty('Summary')){
        altObj  = {
          Title: this.lowpriority['title'],
          AuthorURL: this.lowpriority['URL'],
          Content: this.lowpriority['Summary'],


        }}

        else {
          altObj  = {
            Title: this.lowpriority['Title'],
            AuthorURL: this.lowpriority['AuthorURL'],
            Content: this.lowpriority['Content'],
        }}


        console.log("Check Low: ")
        console.log(altObj)
        this.http.post(`${this.uri}/mydb/saveLowPriority`, altObj)
                    .subscribe(res => console.log("Low Priority List saved"));

  }

  retrieveHighPriority(){
    return this.http.get(`${this.uri}/mydb/findHighPriority`);
  }
  retrieveMediumPriority(){
    return this.http.get(`${this.uri}/mydb/findMediumPriority`);
  }
  retrieveLowPriority(){
    return this.http.get(`${this.uri}/mydb/findLowPriority`);
  }


////Deletion after goal creation
  deleteWebList(){
     localStorage.removeItem('userArticles');
     var checkempty = JSON.parse(localStorage.getItem('userArticles'));
     console.log("Articles Gone");
     console.log(checkempty);
  }
  deleteVidList(){
     localStorage.removeItem('userVideos');
     var checkempty = JSON.parse(localStorage.getItem('userVideos'));
     console.log("Videos Gone");
     console.log(checkempty);
  }
  deleteRedList(){
     localStorage.removeItem('userReddit');
     var checkempty = JSON.parse(localStorage.getItem('userReddit'));
     console.log("Reddits Gone");
     console.log(checkempty);
  }

  deleteVidResList(){
    return this.http.get(`${this.uri}/mydb/deleteVideoResAfterNewGoal`);
  }
  deleteWebResList(){
    return this.http.get(`${this.uri}/mydb/deleteWebResAfterNewGoal`);
  }
  deleteRedResList(){
    return this.http.get(`${this.uri}/mydb/deleteRedditResAfterNewGoal`);
  }



}
