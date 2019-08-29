import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RedditResource} from '../redditresource.model';
import {VideoResource} from '../videoresource.model';
import {HighPriorityList} from '../highprioritylist.model';
import {MediumPriorityList} from '../mediumprioritylist.model';
import {LowPriorityList} from '../lowprioritylist.model';
import {Resource} from '../resource.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {transferArrayItem} from '@angular/cdk/drag-drop';
import { CdkDragDrop} from '@angular/cdk/drag-drop';

//import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-resourcelist',
  templateUrl: './resourcelist.component.html',
  styleUrls: ['./resourcelist.component.css']
})
export class ResourcelistComponent implements OnInit {
   obj: Object = {
      Title: 'High Priority',
      AuthorURL: 'High Priority',
      Content: 'High Priority'
  }
  medobj: Object = {
     Title: 'Medium Priority',
     AuthorURL: 'Medium Priority',
     Content: 'Medium Priority'
 }
 lowobj: Object = {
    Title: 'Low Priority',
    AuthorURL: 'Low Priority',
    Content: 'Low Priority'
}
   highpriority: any[] = [this.obj]
   mediumpriority: any[] = [this.medobj]
   lowpriority: any[] = [this.lowobj]
   totalpriority: any[]
   //extraArray: any[]

   webResource: Resource[]
   redditResource: RedditResource[]
   videoResource: VideoResource[]

   highPriResource: HighPriorityList[]
   mediumPriResource: MediumPriorityList[]
   lowPriResource: LowPriorityList[]

   finalGoal : any
   finalSubGoal: any
   loggedUser: any
   loggedNum : number = 1


  constructor(private resourceservice : ResourceService, private router : Router,
  private data : DataService) { }

  ngOnInit() {
      this.getItDone()
    //  this.fetchTheLists()

    //  this.createTotal()
  }

  getItDone(){

      this.resourceservice
        .getRedditResourceList()
        .subscribe((data : RedditResource[])=>{
           console.log('Here is the proof')
           console.log(data)
           this.redditResource = data
           console.log('Data requested Reddit...')
           console.log(this.redditResource)
           console.log('This is the first concat')
           if(this.totalpriority !==undefined){
           this.totalpriority = this.totalpriority.concat(this.redditResource)
           console.log(this.totalpriority)
         }
          if(this.totalpriority === undefined){
            this.totalpriority =this.redditResource;
            console.log(this.totalpriority)

          }

      //     console.log(this.message)
          // console.log(this.users$[0])
         })

         this.resourceservice
           .getVideoResourceList()
           .subscribe((data : VideoResource[])=>{
              console.log('Here is the proof')
              console.log(data)
              this.videoResource = data
              console.log('Data requested Videos...')
              console.log(this.videoResource)
              console.log('This is the second concat')
              if(this.totalpriority !==undefined){
              this.totalpriority = this.totalpriority.concat(this.videoResource)
              console.log(this.totalpriority)
            }
             if(this.totalpriority === undefined){
               this.totalpriority = this.videoResource;
               console.log(this.totalpriority)

             }


         //     console.log(this.message)
             // console.log(this.users$[0])
            })

            this.resourceservice
              .getWebResourceList()
              .subscribe((data : Resource[])=>{
                 console.log('Here is the proof')
                 console.log(data)
                 this.webResource = data
                 console.log('Data requested Web...')
                 console.log(this.webResource)
                 console.log('This is the third concat')
                 if(this.totalpriority !==undefined){
                 this.totalpriority = this.totalpriority.concat(this.webResource)
                 console.log(this.totalpriority)
               }
                if(this.totalpriority === undefined){
                  this.totalpriority = this.webResource;
                  console.log(this.totalpriority)

                }
            //     console.log(this.message)
                // console.log(this.users$[0])
              })



    }

    createTotal(){
      console.log("check total priority")
       this.totalpriority = this.webResource
       console.log(this.totalpriority)
    }

    drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      console.log(event.previousContainer.data)
      console.log(event.container.data)
      transferArrayItem(event.previousContainer.data,event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.webResource, event.previousIndex, event.currentIndex);
    }
  }
    sendTheLists(){  //Originally this was for saving the priority list.  Now, will use it to save the goal object with the priority lists altogether.


      //7/22/19 -- Added this code to save the resources to the goal.
  //      this.data.loggedInUser.subscribe((res) =>{
      //this.data.currentLogInUser.subscribe((res) =>{
  //      console.log(res);
  //              this.loggedUser = res;
              //  while(this.loggedNum<0){
              //  this.data.passLogInUser(this.loggedUser);
              //  this.loggedNum = this.loggedNum - 1;
              //}
                //Hopefully will give the Observable the next() value it needs
  //    })

      this.loggedUser = this.data.getUserAppWide()
      console.log(this.loggedUser);



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
        //perhaps place a while loop here with a condition that only lasts for one iteration
        console.log(this.highpriority);
        this.resourceservice.insertNewUserGoal(this.finalGoal, this.finalSubGoal, this.highpriority, this.mediumpriority, this.lowpriority, this.loggedUser);

      })

      this.resourceservice.deleteWebList()
              .subscribe((res) => {


                console.log("Is it working!")

              this.resourceservice.deleteVidList()
                      .subscribe((res) => {
                        console.log("Is it working!")

                      this.resourceservice.deleteRedList()
                              .subscribe((res) => {
                                console.log("Is it working!")


                              this.resourceservice.deleteVidResList()
                                      .subscribe((res) => {
                                        console.log("Is it working!")


                                      this.resourceservice.deleteWebResList()
                                              .subscribe((res) => {
                                                console.log("Is it working!")


                                              this.resourceservice.deleteRedResList()
                                                      .subscribe((res) => {
                                                        console.log("Is it working!")
                                                      })  })  })  })  })  })

    }

  //  fetchTheLists(){
  //    this.resourceservice
  //      .retrieveHighPriority()
  //      .subscribe((data : HighPriorityList[])=>{
  //         console.log('Here is the proof')
  //         console.log(data)
  //         this.highPriResource = data
  //         console.log('Data requested High Pri...')
  //         console.log(this.highPriResource)

//           this.highpriority = this.highPriResource //this.highpriority.concat(this.highPriResource)
//           console.log('Data requested High Priority...')
//           console.log(this.highpriority)
//         })

//         this.resourceservice
//           .retrieveMediumPriority()
//           .subscribe((data : MediumPriorityList[])=>{
//              console.log('Here is the proof')
//              console.log(data)
//              this.mediumPriResource = data
//              console.log('Data requested Medium Pri...')
//              console.log(this.mediumPriResource)


  //            this.mediumpriority = this.mediumPriResource //this.mediumpriority.concat(this.mediumPriResource)
  //            console.log('Data requested Medium Priority...')
  //            console.log(this.mediumpriority)
  //          })

  //          this.resourceservice
  //            .retrieveLowPriority()
  //            .subscribe((data : LowPriorityList[])=>{
  //               console.log('Here is the proof')
  //               console.log(data)
    //             this.lowPriResource = data
  //               console.log('Data requested Low Pri...')
  //               console.log(this.lowPriResource)


  //               this.lowpriority = this.lowPriResource //this.lowpriority.concat(this.lowPriResource)
  //               console.log('Data requested Low Priority...')
  //               console.log(this.lowpriority)
  //             })

      //   this.resourceservice
        //   .retrieveMediumPriority()
      //     .subscribe((data : any[])=>{
        //      console.log('Here is the proof')
        //      console.log(data)
        //      this.mediumpriority = data
        //      console.log('Data requested Medium Priority...')
        //      console.log(this.mediumpriority)
        //    })

        //    this.resourceservice
        //      .retrieveLowPriority()
        //      .subscribe((data : any[])=>{
        //         console.log('Here is the proof')
        //         console.log(data)
        //         this.lowpriority = data
        //         console.log('Data requested Low Priority...')
        //         console.log(this.lowpriority)
        //       })

    }
