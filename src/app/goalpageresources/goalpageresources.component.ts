import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { ResourceService } from '../resource.service';
import {DataService} from '../data.service';
import {RedditResource} from '../redditresource.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goalpageresources',
  templateUrl: './goalpageresources.component.html',
  styleUrls: ['./goalpageresources.component.css']
})
export class GoalpageresourcesComponent implements OnInit {
  index: any;
  ResObj: any;
  specResObj: any;
  haveReadBoolean: any;

  goalIndx: any;
  specGoal: any;
  userEmail: any;
  otherResourceService: any;

  tempCurrentResourcePack: any;

  constructor(private router: Router, private data: DataService, private resourceservice: ResourceService) {

 }
  ngOnInit() {

    this.otherResourceService = this.resourceservice;
    this.data.currentHomeProfileRes.subscribe((res) =>{
      console.log("The New Res")
      console.log(res);
      this.index = res

      if(this.index != undefined){
        this.otherResourceService.setBackupResIndex(this.index);
      }
      if(this.index == undefined){
        this.index = this.otherResourceService.getBackupResIndex();
      }

    })

    this.data.currentHomeProfResObj.subscribe((res) =>{
      console.log("The Object")
      console.log(res);
      this.ResObj = res;

      if(this.ResObj != undefined){
        this.otherResourceService.setBackupResObj(this.ResObj);
      }
      if(this.ResObj == undefined){
        this.ResObj = this.otherResourceService.getBackupResObj();
      }

      this.specResObj = this.ResObj[this.index];
      console.log(this.specResObj);
      console.log(this.specResObj._id);

      if(this.specResObj.read!==undefined){
        console.log("We are in business")
        if(this.specResObj.read===true){
          this.haveReadBoolean = true;
        }
        if(this.specResObj.read===false){
          this.haveReadBoolean = false;
        }
      }

    })

    this.data.currentResourcePack.subscribe((res) =>{
      console.log("Resource Care Pack");
      console.log(res);

      this.tempCurrentResourcePack = res;

      if(this.tempCurrentResourcePack != undefined){
        this.otherResourceService.setBackupResourcePack(this.tempCurrentResourcePack);
      }
      if(this.tempCurrentResourcePack == undefined){
        this.tempCurrentResourcePack = this.otherResourceService.getBackupResourcePack();
      }


      this.goalIndx = this.tempCurrentResourcePack[0];
      this.specGoal = this.tempCurrentResourcePack[1];
      this.userEmail = this.tempCurrentResourcePack[2];
    })


  }

  take(){
    var highpri = this.specGoal.HighPriority;
    var medpri = this.specGoal.MediumPriority;
    var lowpri = this.specGoal.LowPriority;
    console.log(highpri)
    console.log(medpri)
    console.log(lowpri)
    var outer;
    var inner;
    var truthcheck = false;
    var resourceLoop = [highpri, medpri, lowpri];
    if(this.specResObj.read!==undefined){
        if(this.specResObj.read===false){
          console.log("True")
          this.specResObj.read=true;
          truthcheck = true//
        }
       if(this.specResObj.read===true && truthcheck===false){
         console.log("True")

         this.specResObj.read=false;
       }

    }

    if(this.specResObj.read===undefined){
      this.specResObj.read=true;
  }
  console.log(this.specResObj);



  for(outer in highpri){
    for(inner in highpri[outer]){
    if(this.specResObj._id === highpri[outer][inner]._id){
      console.log("Got One");
      highpri[outer][inner] = this.specResObj;
      console.log(highpri[outer][inner])
    }
  }
}

  for(outer in medpri){
    for(inner in medpri[outer]){
    if(this.specResObj._id === medpri[outer][inner]._id){
      console.log("Got One");
      medpri[outer][inner] = this.specResObj;
      console.log(medpri[outer][inner])
    }
  }
}

  for(outer in lowpri){
    for(inner in lowpri[outer]){
      console.log(lowpri[outer][inner])
    if(this.specResObj._id === lowpri[outer][inner]._id){
      console.log("Got One");
      lowpri[outer][inner] = this.specResObj;
      console.log(lowpri[outer][inner])
    }
  }
}

console.log(highpri)
console.log(medpri)
console.log(lowpri)

this.resourceservice.sendResourceEdit(this.goalIndx, highpri, medpri, lowpri, this.userEmail);



}}
