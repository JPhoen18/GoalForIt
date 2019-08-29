import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {UserAccount} from '../useraccount.model';
import {Goals} from '../goals.model';
import { Observable } from 'rxjs';
import {DataService} from '../data.service';
import { ResourceService } from '../resource.service';
import {HighPriorityList} from '../highprioritylist.model';
import {MediumPriorityList} from '../mediumprioritylist.model';
import {LowPriorityList} from '../lowprioritylist.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';




//import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';


//const UserAccount = mongoose.model('UserAccount').schema;

@Component({
  selector: 'app-first-goal-form',
  templateUrl: './first-goal-form.component.html',
  styleUrls: ['./first-goal-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:click)': 'hostClick($event)' }
})
export class FirstGoalFormComponent implements OnInit {

  submitted : boolean;
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
//        <button type="submit" class="btn btn-success" [disabled]="!goalForm.form.valid">Submit</button>
//    <form (ngSubmit)="onSubmit()" #goalForm="ngForm">

//  myForm = new FormGroup({
//    myDateYMD: new FormControl(new Date())
//  });

  constructor(private resourceservice : ResourceService, private router : Router,
    private data: DataService){}

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() {
      console.log("Hello")
    this.submitted = true;
   //console.log(this.goalModel.goalTitle)
   //console.log(this.goalModel.description)
   //console.log(this.goalModel.goalCreationDate)
   //console.log(this.goalModel.goalDueDate)
 var userObjArray = [[this.goalModel.goalTitle, this.goalModel.description, this.goalModel.goalCreationDate, this.goalModel.goalDueDate]]
   this.data.passUserObj(userObjArray)

  }
}
